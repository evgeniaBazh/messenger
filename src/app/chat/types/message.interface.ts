export interface Message {
  id: number;
  user: {
    avatar: string;
    name: string;
    id: number;
    lastVisitTime?: Date;
  };
  text: string;
  time: string;
  isCurrentUser: boolean;
  img: string;
}
