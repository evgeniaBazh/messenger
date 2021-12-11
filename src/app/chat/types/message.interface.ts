export interface Message {
  id: number;
  user: {
    avatar: string;
    name: string;
    id: number;
  };
  text: string;
  time: string;
  isCurrentUser: boolean;
  img: string;
}
