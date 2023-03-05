import { Collection } from '@/types/objects';
import { CollectionControlBarTabItem } from '../types';
import { CollectionControlBarButton } from './CollectionControlBarButton';

export const CollectionControlBar = ({
  currnetTab,
  tabs,
  collection,
}: {
  currnetTab: number;
  collection: Collection;
  tabs: CollectionControlBarTabItem[];
}) => {
  const renderTabs = () => {
    return tabs.map((tab) => {
      return (
        <button
          key={`${collection._id}-tab-${tab.id}`}
          type="button"
          onClick={() => tab.onSwitch(tab.id)}
          className={`leading-loose pt-2.5 font-bold p-3 transition-colors px-6 truncate ${
            currnetTab === tab.id ? 'bg-neutral-800' : ''
          }`}
        >
          {tab.title}
        </button>
      );
    });
  };

  return (
    <div className="absolute h-14 bottom-0 w-full flex justify-between border-t border-neutral-800">
      <div className="flex w-1/2">{renderTabs()}</div>
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
