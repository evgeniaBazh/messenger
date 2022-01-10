import { DocumentReference, Timestamp } from "firebase/firestore";
import { UserData } from "src/app/types/user-data.interface";

export interface Message {
  user: UserData;
  text?: string;
  time: Timestamp | Date;
  images?: string[];
  id?: string;
}

export interface UIMessage extends Message {
  isCurrentUser: boolean;
}