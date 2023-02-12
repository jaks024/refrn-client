import { CollectionControlBarButton } from './CollectionControlBarButton';

export function CollectionControlBar() {
  return (
    <div className="absolute h-14 bottom-0 bg-neutral-900 w-full flex justify-between px-6 border-t border-neutral-800">
      <span className="leading-loose pt-2.5 font-bold">your collection 1</span>
      <div className="h-full py-2">
        <CollectionControlBarButton />
        <CollectionControlBarButton />
        <CollectionControlBarButton />
        <CollectionControlBarButton />
        <CollectionControlBarButton />
      </div>
    </div>
  );
}
