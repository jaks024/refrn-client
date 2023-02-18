import { Collection } from '@/database/models/Collection';

export const getCollection = async (collectionId: string) => {
  const collection = await Collection.findById(collectionId);
  return collection;
};

// export const updateCollection = async (collectionId: string) => {};

// export const deleteCollection = async (collectionId: string) => {};

export const createCollection = async () => {};
