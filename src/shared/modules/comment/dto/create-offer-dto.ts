import { IComment } from '../../../../types/comment.js';
import { IUser } from '../../../../types/user.js';


export class CreateUserDto implements IComment {
  public author: IUser;
  public rating: number;
  public publicData: Date;
  public text: string;
}
