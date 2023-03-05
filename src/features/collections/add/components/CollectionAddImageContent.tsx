import { ImageUpload } from '@/features/upload';

export const CollectionAddImageContent = () => {
  return (
    <div className="bg-neutral-900 rounded-md h-full">
      <div className="font-bold text-xl">Add Images</div>
      <ImageUpload />
    </div>
  );
};
