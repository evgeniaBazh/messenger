export interface MessagingComponent {
  id: number;
  user: {
    avatar: string;
    name: string;
    id: number;
  };
  text: string;
  time: Date;
  isCurrentUser: boolean;
  img: string;
}
