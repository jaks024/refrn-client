import { CreateCollectionDto } from './types';

export const generateNewCollectionData = (parentId: string = ''): CreateCollectionDto => {
  return {
    name: `my collection # ${Math.floor(Math.random() * 100000)}`,
    description: 'my new collection',
    imageIds: [],
    subCollectionIds: [],
    cover: '',
    parentId,
  };
};
