import { PropsWithChildren } from 'react';

export interface CollectionTreeItemProps extends PropsWithChildren {
  parentId: string;
  collectionId: string;
}

export interface CollectionIdentifierTree {
  id: string;
  name: string;
  imageIdsCount: number;
  subCollections: CollectionIdentifierTree[];
}

export interface CreatedCollectionResult {
  id: string;
}

export interface CreateCollectionDto {
  name: string;
  description: string;
  imageIds: string[];
  subCollectionIds: string[];
  cover: string;
  parentId: string;
}

export interface DeleteCollectionDto {
  parentId: string;
}

export interface UpdateCollectionDto {}