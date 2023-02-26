import { PropsWithChildren } from 'react';

interface NothingHereProps extends PropsWithChildren {
  message: string;
}

export const NothingHere = ({ message, children }: NothingHereProps) => {
  return (
    <div className="w-full h-fit relative top-1/2 -translate-y-1/2 text-center font-semibold text-sm text-neutral-700">
      {message}
      {children}
    </div>
  );
};
