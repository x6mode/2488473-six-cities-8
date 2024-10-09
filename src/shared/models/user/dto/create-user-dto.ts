import { IUser, TUserType } from '../../../../types/user.js';

export class CreateUserDto implements Omit<IUser, 'avatar'> {
  public mail: string;
  public name: string;
  public password: string;
  public type: TUserType;
}
