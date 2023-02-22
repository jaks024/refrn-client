import { CollectionTree } from '@/features/collections';
import { NavButton } from './NavButton';

export function Navbar() {
  return (
    <div className="w-72 h-full flex flex-col border-r border-neutral-800 min-w-[300px]">
      <h1 className="w-full font-black text-4xl leading-loose px-6 pt-4 pb-2">
        refrn.
      </h1>
      <CollectionTree />
      <div className="p-6">
        <NavButton />
        <NavButton />
        <NavButton />
      </div>
    </div>
  );
}
