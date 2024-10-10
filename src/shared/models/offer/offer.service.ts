import { inject } from 'inversify';
import { Logger } from '../../libs/logger.js';

import { DocumentTypegoose } from '../../../types/global.js';
import { Components } from '../../../types/components.js';

import { OfferEntity, OfferModel } from './offer.entity.js';
import { CreateOfferDto } from './dto/create-offer-dto.js';


interface IOfferService {
  create(dto: CreateOfferDto): DocumentTypegoose<OfferEntity>;
  patchById(offerId: string, dto: CreateOfferDto): DocumentTypegoose<OfferEntity>;
  findById(id: string): DocumentTypegoose<OfferEntity>;
}

export class OfferService implements IOfferService {
  constructor (
    @inject(Components.Logger) private readonly logger: Logger
  ) {}

  public async create(dto: CreateOfferDto): DocumentTypegoose<OfferEntity> {
    const offer = await OfferModel.create(dto);
    this.logger.info(`New offer created with ID: ${offer._id}`);

    return offer;
  }

  public async patchById(offerId: string, dto: CreateOfferDto): DocumentTypegoose<OfferEntity> {
    const patchedOffer = await OfferModel
      .findByIdAndUpdate(offerId, dto, { new: true })
      .exec();

    this.logger.info(`Offer with id: ${patchedOffer?._id} has been patched!`);
    return patchedOffer;
  }

  public async findById(id: string): DocumentTypegoose<OfferEntity> {
    return await OfferModel
      .findById({ id })
      .exec();
  }
}
