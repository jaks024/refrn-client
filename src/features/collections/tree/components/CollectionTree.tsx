import { CollectionTreeItem } from './ColletionTreeItem';
import { v4 } from 'uuid';
import { useCollectionIdentifierTree } from '../../api/collectionIdentifierTree';
import { useCurrentUserData } from '@/features/user/hooks/useCurrentUserData';
import { useState } from 'react';
import { CollectionIdentifierTree } from '../types';

export const CollectionTree = () => {
  const [userCollections, setUserCollections] = useState<CollectionIdentifierTree[]>([]);
  const { userData } = useCurrentUserData();

  useCollectionIdentifierTree({
    collectionIds: userData.collectionIds,
    config: {
      enabled: userData.collectionIds.length > 0,
      onSuccess(data) {
        setUserCollections((cols) => {
          const index = cols.findIndex((c) => c.id === data.id);
          if (index === -1) {
            cols.push(data);
          } else {
            cols[index] = data;
          }
          return cols;
        });
      },
    },
  });

  const renderTreeItem = (collectionIds: CollectionIdentifierTree[]) => {
    if (collectionIds.length === 0) {
      return <></>;
    }
    return collectionIds.map((collection: CollectionIdentifierTree) => {
      return (
        <CollectionTreeItem
          key={v4()}
          name={collection.name}
          imageIdsCount={collection.imageIdsCount}
          subCollectionIdsCount={collection.subCollections.length}
        >
          {renderTreeItem(collection.subCollections)}
        </CollectionTreeItem>
      );
    });
  };

  return (
    <div className="px-6 grow">
      <h2 className="font-bold text-xl leading-loose">your collections</h2>
      <div>{renderTreeItem(userCollections)}</div>
    </div>
  );
};
