import React, { createContext, useState, ReactNode, useEffect } from 'react';
import API from '../services/axiosInstance';
import { useSelector } from 'react-redux';

interface NotificationSetting {
  id: string;
  category: string;
  allowAll: boolean;
  push: boolean;
  inApp: boolean;
  email: boolean;
}

interface NotificationSettingsContextType {
  settings: NotificationSetting[];
  toggleSetting: (id: string, key: keyof Omit<NotificationSetting, 'id' | 'category'>) => void;
  fetchSettings: () => void;
}

export const NotificationSettingsContext = createContext<NotificationSettingsContextType>({
  settings: [],
  toggleSetting: () => {},
  fetchSettings: () => {},
});

interface NotificationSettingsProviderProps {
  children: ReactNode;
}

export const NotificationSettingsProvider = ({ children }: NotificationSettingsProviderProps) => {
  const userId = useSelector((state: any) => state.auth.user?.id);
  const [settings, setSettings] = useState<NotificationSetting[]>([]);

  const fetchSettings = async () => {
    if (!userId) return;
    try {
      const response = await API.get<NotificationSetting[]>(`/notification-settings`, {
        params: { userId },
      });
      setSettings(response.data);
    } catch (error) {
      console.error('Failed to fetch notification settings:', error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, [userId]);

  const toggleSetting = async (id: string, key: keyof Omit<NotificationSetting, 'id' | 'category'>) => {
    const setting = settings.find(s => s.id === id);
    if (!setting) return;
    try {
      const updatedValue = !setting[key];
      await API.put(`/notification-settings/${id}`, { [key]: updatedValue });
      setSettings(prev =>
        prev.map(s => (s.id === id ? { ...s, [key]: updatedValue } : s))
      );
    } catch (error) {
      console.error('Failed to update notification setting:', error);
    }
  };

  return (
    <NotificationSettingsContext.Provider value={{ settings, toggleSetting, fetchSettings }}>
      {children}
    </NotificationSettingsContext.Provider>
  );
};
