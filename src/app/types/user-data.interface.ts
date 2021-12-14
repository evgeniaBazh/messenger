import { ChatData } from "./dialog.interface";
import { LoginData } from "./login-data.interface";

export interface UserData extends LoginData {
  /**
   * Отображаемое имя
   */
  name: string;
  photoURL?: string;
  phone: string;
  chats?: ChatData[];
}