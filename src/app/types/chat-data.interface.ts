import { DocumentReference } from "firebase/firestore";
import { Message } from "../chat/types/message.interface";
import { UserData } from "./user-data.interface";

export interface ChatData {
  avatarUrl: string;
  name: string;
  unreadedMessagesCount: number;
  status: 'online' | 'inactive' | null;
  lastMessage?: Message;
  time?: string | Date;
  users?: UserData[] | DocumentReference<UserData>[],
  isPrivate?: boolean;
  messages?: Message[];
}
