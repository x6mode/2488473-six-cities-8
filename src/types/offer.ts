import { IUser } from './user.js';


export type TOfferConvenience = 'Breakfast' | 'Air conditioning' | 'Laptop friendly workspace' | 'Baby seat' | 'Washer' | 'Towels' | 'Fridge';
export type TOfferType = 'apartment' | 'house' | 'room' | 'hotel';
export type TOfferCity = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
export type TOfferCoordinates = {
  latitude: number;
  longitude: number;
};

export interface IOffer {
  name: string;
  description: string;
  publicData: string;
  city: TOfferCity;
  previewPhoto: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: TOfferType;
  rooms: number;
  guests: number;
  price: number;
  convenience: TOfferConvenience;
  commentsLength: number;
  author: IUser;
  coordinates: TOfferCoordinates;
}
