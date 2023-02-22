import { useState } from 'react';
import { CollectionTreeItemProps } from '../types';

export const CollectionTreeItem = ({
  children,
  name,
  imageIdsCount,
  subCollectionIdsCount,
}: CollectionTreeItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = () => {
    if (subCollectionIdsCount === 0) {
      return;
    }
    setExpanded(!expanded);
  };

  const renderExpandTriangle = () => {
    if (subCollectionIdsCount > 0) {
      return (
        <span
          className={`pl-1.5 pr-1 transition-colors ${
            expanded ? 'text-neutral-100' : 'text-neutral-500'
          }`}
        >
          {expanded ? '▾' : '▸'}
        </span>
      );
    }
    return <></>;
  };

  return (
    <div className="border-l border-neutral-700 w-full">
      <div className="flex flex-row w-full justify-between group transition-colors hover:bg-neutral-800 rounded-tr-md rounded-br-md">
        <button
          className="text-sm hover:bg-neutral-700 pr-2 rounded-tr-md rounded-br-md transition-colors"
          onClick={handleOnClick}
        >
          <span className="text-neutral-700 text-sm pr-0.5">—</span>
          {name} ⋅ {imageIdsCount}
          {renderExpandTriangle()}
        </button>

        <button className="text-sm transition-[background,opacity] hover:bg-neutral-700 px-1 rounded opacity-0 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>

      <div
        className={`pl-3 overflow-hidden transition-[height] ${
          !expanded ? 'h-0' : 'h-fit'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
