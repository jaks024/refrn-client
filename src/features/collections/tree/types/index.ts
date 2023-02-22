import { PropsWithChildren } from 'react';

export interface CollectionTreeItemProps extends PropsWithChildren {
  name: string;
  imageIdsCount: number;
  subCollectionIdsCount: number;
}

export interface CollectionIdentifierTree {
  id: string;
  name: string;
  imageIdsCount: number;
  subCollections: CollectionIdentifierTree[];
}
