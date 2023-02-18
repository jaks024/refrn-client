import mongoose from 'mongoose';
import { collectionSchema } from '../schemas/collection';

export const Collection = mongoose.model('Collection', collectionSchema);
