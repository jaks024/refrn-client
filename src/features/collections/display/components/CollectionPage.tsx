import { CollectionContent } from './CollectionContent';
import { CollectionControlBar } from './CollectionControlBar';
import { CollectionHeader } from './CollectionHeader';

export function CollectionPage() {
  return (
    <div className="grow relative">
      <div className="h-full overflow-y-auto relative bg-neutral-900">
        <CollectionHeader />
        <CollectionContent />
        <div className="w-full text-center leading-loose p-6 pb-16 text-neutral-700">
          that&apos;s all!
        </div>
      </div>
      <CollectionControlBar />
    </div>
  );
}
