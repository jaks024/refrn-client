import { FadeIn } from '@/components/Animation';
import { Collection } from '@/types/objects';

export function CollectionHeader({ collection }: { collection: Collection }) {
  const renderTags = (tags: string[]) => {
    return (
      <div className="gap-1 flex">
        {tags.map((t, index) => {
          return (
            <FadeIn>
              <span
                key={`${collection._id}-tag-${index}`}
                className="transition-colors hover:bg-neutral-700 px-2 py-0.5 border border-neutral-700 rounded-md"
              >
                {t}
              </span>
            </FadeIn>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col h-fit gap-1">
      <div className="flex">
        <h1 className="text-4xl font-black truncate leading-tight pb-3">{collection.name}</h1>
      </div>
      <p className="h-fit w-full p">{collection.description}</p>
      {renderTags(collection.tags)}
      <span>
        {`Images: ${collection.imageIds.length} | Last Updated: ${collection.updatedAt} | Created: ${collection.createdAt}`}
      </span>
    </div>
  );
}
