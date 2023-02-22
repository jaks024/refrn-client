import { PropsWithChildren } from 'react';

export interface CollectionTreeItemProps extends PropsWithChildren {
  name: string;
  imageIdsCount: number;
  subCollectionIdsCount: number;
}
