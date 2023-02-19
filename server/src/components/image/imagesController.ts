import { Image } from '../../database/models/Image';
import { ImageDto } from './types';

export const getImage = () => {};

export const updateImage = () => {};

export const deleteImage = () => {};

export const createImage = async (imageDto: ImageDto) => {
  const newImage = await Image.create(imageDto);
  console.log(newImage);
  return { id: newImage.id };
};
