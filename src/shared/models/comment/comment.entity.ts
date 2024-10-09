import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { IUser } from '../../../types/user.js';
import { IComment } from '../../../types/comment.js';

@modelOptions({
  schemaOptions: {
    collection: 'comments',
    timestamps: true,
  }
})

class CommentEntity implements IComment {
  @prop({ required: true })
  public text: string;

  @prop({ required: true })
  public publicData: Date;

  @prop({ required: true })
  public rating: number;

  @prop({ required: true })
  public author: IUser;
}

export const CommentModel = getModelForClass(CommentEntity);
