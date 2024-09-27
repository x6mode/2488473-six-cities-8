import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { getHashPassword } from '../../../utils/crypto.js';

import { IUser } from '../../../types/user.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class UserEntity extends defaultClasses.TimeStamps implements IUser {
  @prop({ required: true, unique: true })
  public mail: string;

  @prop({ required: true, default: '' })
  public avatar?: string | undefined;

  @prop({ required: true })
  public password: string;

  @prop({ required: true })
  public firstname: string;

  @prop({ required: true })
  public lastname: string;

  constructor (userData: IUser) {
    super();

    this.mail = userData.mail;
    this.avatar = userData.avatar;
    this.firstname = userData.firstname;
    this.lastname = userData.lastname;
  }

  public setPassword(password: string, salt: string) {
    this.password = getHashPassword(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
