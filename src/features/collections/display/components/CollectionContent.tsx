import { Collection } from '@/types/objects';
import { CollectionImage } from './CollectionImage';

export const CollectionContent = ({ collection }: { collection: Collection }) => {
  return (
    <div
      className="w-full h-fit grid"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
      }}
    >
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
      <CollectionImage />
    </div>
  );
};
