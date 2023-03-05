import { FadeIn } from '@/components/Animation';
import { useState } from 'react';
import { AcceptedImages } from '../types';
import { ImageUpload } from './ImageUpload';

export const CollectionAddImageContent = () => {
  const [acceptedImages, setAcceptedImages] = useState<AcceptedImages[]>([]);

  const handleDropAccepted = (files: AcceptedImages) => {
    console.log(files);
    setAcceptedImages((prevFiles) => [...prevFiles, files]);
  };

  const renderAcceptedImages = () => {
    return acceptedImages.map((image) => {
      const url = URL.createObjectURL(image.file);
      return (
        <div className="w-full h-full relative group cursor-pointer">
          <FadeIn key={image.name}>
            <div className="h-52 w-auto">
              <img className="w-full h-full object-cover" src={url} alt={image.name} />
            </div>
            <div className=" pointer-events-none absolute flex flex-col p-2 justify-end text-left text-sm font-semibold bg-neutral-900 top-0 transition-opacity opacity-0 group-hover:opacity-70 w-full h-full">
              <span>{image.name}</span>
            </div>
          </FadeIn>
        </div>
      );
    });
  };

  console.log(acceptedImages);
  return (
    <FadeIn>
      <div className="rounded-md h-full flex flex-col gap-4">
        <ImageUpload onDropAccepted={handleDropAccepted} />
        <br />
        <h2 className="font-bold text-2xl">Added Images</h2>
        <div
          className="w-full h-fit grid rounded-md overflow-hidden"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 13rem), 1fr))',
          }}
        >
          {renderAcceptedImages()}
        </div>
      </div>
    </FadeIn>
  );
};
