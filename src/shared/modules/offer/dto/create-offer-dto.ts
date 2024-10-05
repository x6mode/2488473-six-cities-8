import { IUser } from '../../../../types/user.js';
import { IOffer, TOfferCity, TOfferConvenience, TOfferCoordinates, TOfferType } from '../../../../types/offer.js';


export class CreateOfferDto implements Omit<IOffer, 'commentsLength'> {
  public author: IUser;
  public convenience: TOfferConvenience;
  public city: TOfferCity;
  public coordinates: TOfferCoordinates;
  public description: string;
  public guests: number;
  public isFavorite: boolean;
  public isPremium: boolean;
  public name: string;
  public photos: string[];
  public previewPhoto: string;
  public price: number;
  public publicData: string;
  public rating: number;
  public rooms: number;
  public type: TOfferType;
}
