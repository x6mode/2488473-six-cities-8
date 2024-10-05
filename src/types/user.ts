export type TUserType = 'pro' | 'обычный';

export interface IUser {
  name: string;
  mail: string;
  avatar?: string;
  type: TUserType;
  password: string;
}
