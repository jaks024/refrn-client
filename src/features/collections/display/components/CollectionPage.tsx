import { CollectionContent } from './CollectionContent';
import { CollectionControlBar } from './CollectionControlBar';
import { CollectionHeader } from './CollectionHeader';
import SimpleBar from 'simplebar-react';
import { useCollectionStore } from '@/stores';

export function CollectionPage() {
  const { currentCollection } = useCollectionStore();
  return (
    <div className="grow relative overflow-hidden flex w-full">
      <div className="grow overflow-hidden relative bg-neutral-900 mb-14">
        <SimpleBar className="h-full">
          <div className="p-6 gap-6 flex flex-col w-full min=w">
            <CollectionHeader collection={currentCollection} />
            <CollectionContent collection={currentCollection} />
          </div>
        </SimpleBar>
      </div>

      <CollectionControlBar />
    </div>
  );
}
