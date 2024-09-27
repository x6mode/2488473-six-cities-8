import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { ICategory } from '../../../types/category.js';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface CategoryEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class CategoryEntity implements ICategory {
  @prop({ required: true, unique: true })
  public name: 'Дом' | 'Электроника' | 'Одежда' | 'Книги' | 'Спорт' | 'Авто';

  @prop({ required: true })
  public path: string;

  @prop()
  public annonLength: number;
}

export const CategoryModel = getModelForClass(CategoryEntity);
