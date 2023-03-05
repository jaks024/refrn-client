import { useDropzone } from 'react-dropzone';
import { AcceptedImages } from '../types';

export const ImageUpload = ({ onDropAccepted }: { onDropAccepted: (files: any) => void }) => {
  const blobToData = (blob: Blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/webp': [],
      'image/jfif': [],
    },
    async onDropAccepted(files, event) {
      files.map((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
          const binaryStr = reader.result;
          onDropAccepted({ name: file.name, binary: binaryStr, file });
        };
        reader.readAsArrayBuffer(file);
      });
    },
  });

  return (
    <div>
      <section className="container">
        <div
          {...getRootProps({ className: 'dropzone' })}
          className="w-full h-80 rounded-md border-dashed border-neutral-600 border-2"
        >
          <input {...getInputProps()} />
          <p className="w-full h-fit text-center relative top-1/2 -translate-y-1/2 font-bold text-base text-neutral-600">
            Drag 'n' drop some images here, or click to select images
            {' (.jpeg .png .webp .jfif)'}
          </p>
        </div>
      </section>
    </div>
  );
};
