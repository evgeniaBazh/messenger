import { DocumentReference } from "firebase/firestore";
import { ChatData } from "./chat-data.interface";
import { LoginData } from "./login-data.interface";

export interface UserData extends LoginData {
  /**
   * Отображаемое имя
   */
  name: string;
  photoURL?: string;
  userId?: string;
  phone: string;
  chats?: ChatData[] | DocumentReference[];
}