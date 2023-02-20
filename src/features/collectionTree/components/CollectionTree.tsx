import { Collection } from '@/types/objects';
import { CollectionTreeItem } from './ColletionTreeItem';
import { v4 } from 'uuid';
export const CollectionTree = () => {
  const testCollectiosn: Collection[] = [
    {
      _id: '1',
      name: 'string',
      description: 'string',
      imageIds: [],
      subCollectionIds: ['3'],
      cover: 'string',
    },
    {
      _id: '2',
      name: 'string',
      description: 'string',
      imageIds: [],
      subCollectionIds: ['4'],
      cover: 'string',
    },
  ];
  const subs: Collection[] = [
    {
      _id: '3',
      name: 'string',
      description: 'string',
      imageIds: [],
      subCollectionIds: [],
      cover: 'string',
    },
    {
      _id: '4',
      name: 'string',
      description: 'string',
      imageIds: [],
      subCollectionIds: [],
      cover: 'string',
    },
    {
      _id: '5',
      name: 'string',
      description: 'string',
      imageIds: [],
      subCollectionIds: [],
      cover: 'string',
    },
  ];

  const renderTreeItem = (collectionIds: Collection[]) => {
    if (collectionIds.length === 0) {
      return <></>;
    }
    const subCollections: Collection[] = structuredClone(subs); // get collections using subCollectionId
    subs.pop();

    return collectionIds.map((collection: Collection) => {
      return (
        <CollectionTreeItem
          key={v4()}
          name={collection.name}
          imageIdsCount={collection.imageIds.length}
          subCollectionIdsCount={subCollections.length}
        >
          {renderTreeItem(subCollections)}
        </CollectionTreeItem>
      );
    });
  };
  return (
    <div className="px-6 grow">
      <h2 className="font-bold text-xl leading-loose">your collections</h2>
      <div>{renderTreeItem(testCollectiosn)}</div>
    </div>
  );
};
