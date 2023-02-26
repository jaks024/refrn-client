import { PropsWithChildren } from 'react';

export interface CollectionTreeItemProps extends PropsWithChildren {
  parentId: string;
  isParentUser?: boolean;
  collectionId: string;
}

export interface CreatedCollectionResult {
  id: string;
}

export interface CreateCollectionDto {
  name: string;
  description: string;
  imageIds: string[];
  subCollectionIds: string[];
  tags: string[];
  cover: string;
  parentId: string;
}

export interface DeleteCollectionDto {
  parentId: string;
}

export interface UpdateCollectionDto {}
