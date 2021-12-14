import { Message } from "../chat/types/message.interface";

export interface ChatData {
  avatarSrc: string;
  time: string | Date;
  name: string;
  lastMessage: string;
  unreadedMessagesCount: number;
  status: 'online' | 'inactive' | null;
  messages?: Message[];
}
