import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import { IOffer } from '../../../types/offer.js';
import { IUser } from '../../../types/user.js';
import { ICategory } from '../../../types/category.js';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class OfferEntity extends defaultClasses.TimeStamps implements IOffer {
  @prop({ required: true })
  public author: IUser;

  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public publicData: string;

  @prop({ required: true })
  public previewPhoto: string;

  @prop({ required: true })
  public type: 'Куплю' | 'Продам';

  @prop()
  public commentsLength: number;

  @prop({ required: true })
  public price: number;

  @prop({ required: true })
  public categories: ICategory[];
}

export const OfferModel = getModelForClass(OfferEntity);
