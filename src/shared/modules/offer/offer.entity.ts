import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import { IUser } from '../../../types/user.js';
import { IOffer, TOfferCity, TOfferConvenience, TOfferCoordinates, TOfferType } from '../../../types/offer.js';


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
  public name: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public city: TOfferCity;

  @prop({ required: true })
  public publicData: string;

  @prop({ required: true })
  public previewPhoto: string;

  @prop({ required: true })
  public type: TOfferType;

  @prop({ required: true })
  public photos: string[];

  @prop({ required: true })
  public isPremium: boolean;

  @prop({ required: true })
  public isFavorite: boolean;

  @prop({ required: true })
  public rating: number;

  @prop({ required: true })
  public rooms: number;

  @prop({ required: true })
  public guests: number;

  @prop({ required: true })
  public price: number;

  @prop({ required: true })
  public convenience: TOfferConvenience;

  @prop()
  public commentsLength: number;

  @prop({ required: true })
  public author: IUser;

  @prop({ required: true })
  public coordinates: TOfferCoordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
