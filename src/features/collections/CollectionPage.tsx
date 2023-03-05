import { CollectionContent } from './display/components/CollectionContent';
import { CollectionControlBar } from './control/components/CollectionControlBar';
import { CollectionHeader } from './display/components/CollectionHeader';
import SimpleBar from 'simplebar-react';
import { useCollectionStore } from '@/stores';
import { NothingHere } from '@/components/Common';
import { CollectionControlBarTabItem } from './control';
import { useMemo, useState } from 'react';
import { CollectionAddImageContent } from './add';

export function CollectionPage() {
  const { currentCollection } = useCollectionStore();

  const DISPLAY_TAB = 0;
  const ADD_TAB = 1;
  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs: CollectionControlBarTabItem[] = useMemo(() => {
    if (currentCollection === undefined) {
      return [];
    }
    return [
      {
        id: DISPLAY_TAB,
        title: currentCollection.name,
        onSwitch: setCurrentTab,
      },
      {
        id: ADD_TAB,
        title: 'Add Images',
        onSwitch: setCurrentTab,
      },
    ];
  }, [currentCollection]);

  const renderTab = () => {
    switch (currentTab) {
      case ADD_TAB:
        return <CollectionAddImageContent />;
      default:
        return <CollectionContent collection={currentCollection} />;
    }
  };

  return (
    <div className="grow relative overflow-hidden flex w-full">
      {currentCollection === undefined ? (
        <NothingHere message={` please select a collection! ${'	(´｡• ω •｡`)'}`} />
      ) : (
        <>
          <div className="grow overflow-hidden relative bg-gradient-to-b from-neutral-900 to-neutral-800 mb-14">
            <SimpleBar className="h-full">
              <div className="p-6 gap-6 flex flex-col w-full min=w">
                <CollectionHeader collection={currentCollection} />
                {renderTab()}
              </div>
            </SimpleBar>
          </div>
          <CollectionControlBar
            currnetTab={currentTab}
            tabs={tabs}
            collection={currentCollection}
          />
        </>
      )}
    </div>
  );
}
