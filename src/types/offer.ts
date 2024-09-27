import { ICategory } from './category.js';
import { IUser } from './user.js';

export interface IOffer {
  name: string;
  description: string;
  publicData: string;
  previewPhoto: string;
  type: 'Куплю' | 'Продам';
  commentsLength: number;
  price: number;
  author: IUser;
  categories: ICategory[];
}
