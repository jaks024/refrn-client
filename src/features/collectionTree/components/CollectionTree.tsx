import { CollectionTreeItem } from './ColletionTreeItem';

export const CollectionTree = () => {
  return (
    <div className="px-6 grow">
      <h2 className="font-bold text-xl leading-loose">your collections</h2>
      <div>
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
        <CollectionTreeItem />
      </div>
    </div>
  );
};
