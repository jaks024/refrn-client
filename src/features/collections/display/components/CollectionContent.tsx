import { FadeIn } from '@/components/Animation';
import { useImages } from '@/features/images';
import { Collection, Image } from '@/types/objects';
import { CollectionImage } from './CollectionImage';

export const CollectionContent = ({ collection }: { collection: Collection }) => {
  const imageQueries = useImages({
    imageIds: collection.imageIds,
    config: {
      staleTime: Infinity,
    },
  });

  const renderImages = (images: Image[]) => {
    if (images.length === 0) {
      return (
        <div className="w-full text-center p-20 font-semibold text-sm text-neutral-700">
          no images in collection {`(⌒_⌒;)	`}
          <div>begin by adding some!</div>
        </div>
      );
    }
    console.log(images);
    return images.map((img, index) =>
      img ? (
        <CollectionImage key={img._id + index} image={img} />
      ) : (
        <FadeIn>
          <div
            key={`${collection._id}-loading-${index}`}
            className="w-full h-full animate-pulse bg-neutral-800"
          />
        </FadeIn>
      ),
    );
  };
  return (
    <div
      className="w-full h-fit grid rounded-md overflow-hidden"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 13rem), 1fr))',
      }}
    >
      {renderImages(imageQueries.map((result) => result.data))}
    </div>
  );
};
