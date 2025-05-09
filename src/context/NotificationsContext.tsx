import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import API from '../services/axiosInstance';

export interface Notification {
  id: number;
  userId: number;
  type: string;
  message: string;
  read: boolean;
  timestamp: string;
  author?: string;
  avatarUrl?: string;
}

interface NotificationsContextType {
  notifications: Notification[];
  filter: string;
  setFilter: (filter: string) => void;
  markAsRead: (id: number) => Promise<void>;
}

export const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  filter: 'all',
  setFilter: () => {},
  markAsRead: async () => {},
});

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const userId = useSelector((state: any) => state.auth.user?.id);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const fetchNotifications = async () => {
    if (!userId) return;
    try {
      const response = await API.get<Notification[]>('/notifications', {
        params: { userId, filter },
      });
      setNotifications(response.data);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [filter, userId]);

  const markAsRead = async (id: number) => {
    try {
      await API.post(`/notifications/${id}/read`);
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  return (
    <NotificationsContext.Provider value={{ notifications, filter, setFilter, markAsRead }}>
      {children}
    </NotificationsContext.Provider>
  );
};
