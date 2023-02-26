import { FadeIn } from '@/components/Animation';
import { Image } from '@/types/objects';

export const CollectionImage = ({ image }: { image: Image }) => {
  const renderTags = (tags: string[]) => {
    return (
      <div className="gap-1 flex">
        {tags.map((t, index) => {
          return (
            <span
              key={`${image._id}-tag-${index}`}
              className="px-1 border border-neutral-500 rounded-md"
            >
              {t}
            </span>
          );
        })}
      </div>
    );
  };
  return (
    <button className="w-full h-full relative group">
      <FadeIn>
        <div className="h-52 w-auto">
          <img className="w-full h-full object-cover" src={image.url} alt={image.description} />
        </div>
        <div className="absolute flex flex-col p-2 justify-end text-left text-sm font-semibold bg-neutral-900 top-0 transition-opacity opacity-0 group-hover:opacity-70 w-full h-full">
          <span>{renderTags(image.tags)}</span>
          <a href={image.sourceUrl} target="_blank">
            {image.sourceName}
          </a>
          <span>{image.createdAt}</span>
        </div>
      </FadeIn>
    </button>
  );
};
