export interface Dialog {
  avatarSrc: string;
  clock: string;
  name: string;
  lastMessage: string;
  counterMail: number;
  status: 'online' | 'inactive' | null;
}
