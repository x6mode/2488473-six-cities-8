import { IUser } from './user.js';

export interface IComment {
  text: string;
  publicData: Date;
  rating: number;
  author: IUser;
}
