import { Collection } from '@/types/objects';
import { CollectionControlBarButton } from './CollectionControlBarButton';

export const CollectionControlBar = ({ collection }: { collection: Collection }) => {
  return (
    <div className="absolute h-14 bottom-0 bg-neutral-900 w-full flex justify-between px-6 border-t border-neutral-800">
      <span className="leading-loose pt-2.5 font-bold">{collection.name}</span>
      <div className="h-full py-2">
        <CollectionControlBarButton />
        <CollectionControlBarButton />
        <CollectionControlBarButton />
        <CollectionControlBarButton />
        <CollectionControlBarButton />
      </div>
    </div>
  );
};
