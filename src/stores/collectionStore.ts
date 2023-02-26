import { Collection } from '@/types/objects';
import { create } from 'zustand';

interface CollectionState {
  currentCollection: Collection;
  setCurrentCollection: (newCollection: Collection) => void;
}

const EMTPY_COLLECTION: Collection = {
  _id: '',
  name: '',
  description: '',
  tags: [],
  imageIds: [],
  subCollectionIds: [],
  cover: '',
  createdAt: '',
  updatedAt: '',
};

export const useCollectionStore = create<CollectionState>()((set) => ({
  currentCollection: EMTPY_COLLECTION,
  setCurrentCollection(newCollection) {
    set(() => ({ currentCollection: newCollection }));
  },
}));
