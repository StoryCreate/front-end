import API from './axiosInstance';

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: Array<{ id: string; name: string; avatar: string }>;
  lastMessage: Message;
}

export const fetchMessages = async (): Promise<Conversation[]> => {
  const response = await API.get('/messages');
  return response.data;
};

export const searchMessages = async (query: string): Promise<Conversation[]> => {
  const response = await API.get('/messages/search', { params: { q: query } });
  return response.data;
};

export const sendMessage = async (conversationId: string, content: string): Promise<Message> => {
  const response = await API.post(`/messages/${conversationId}/send`, { content });
  return response.data;
};
