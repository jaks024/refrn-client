import mongoose from 'mongoose';
import { ImageSchema } from '../schemas/image';

export const Image = mongoose.model('Image', ImageSchema);
