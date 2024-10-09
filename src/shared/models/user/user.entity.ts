import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { getHashPassword } from '../../../utils/crypto.js';

import { IUser, TUserType } from '../../../types/user.js';

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
  public name: string;

  @prop({ required: true })
  public type: TUserType;

  constructor (userData: IUser) {
    super();

    this.mail = userData.mail;
    this.avatar = userData.avatar;
    this.type = userData.type;
    this.name = userData.name;
  }

  public setPassword(password: string, salt: string) {
    this.password = getHashPassword(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
