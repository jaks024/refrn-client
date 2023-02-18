import { Schema } from 'mongoose';

export const collectionSchema = new Schema({
  id: String,
  name: String,
  description: String,
  imageIds: [String],
  cover: String,
});
