import { DocumentType } from '@typegoose/typegoose';

export type DocumentTypegoose<T> = Promise<DocumentType<T> | null>;
