import { IUser } from '../../../../types/user.js';

export class CreateUserDto implements Omit<IUser, 'avatar'> {
  public mail: string;
  public firstname: string;
  public lastname: string;
  public password: string;
}
