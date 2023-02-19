import { CollectionImage } from './CollectionImage';

export const CollectionContent = () => {
  return (
    <div
      className="w-full h-fit px-6 py-2 grid"
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
