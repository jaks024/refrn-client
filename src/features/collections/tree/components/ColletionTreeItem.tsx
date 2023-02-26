import { FadeIn } from '@/components/Animation';
import { PlusIcon } from '@/components/Icons';
import { useCollectionStore } from '@/stores';
import { useMemo, useState } from 'react';
import { useCollections } from '../../api/collections';
import { useCreateCollection } from '../../api/createCollection';
import { useDeleteCollection } from '../../api/deleteCollection';
import { generateNewCollectionData } from '../constants';
import { CollectionTreeItemProps } from '../types';

export const CollectionTreeItem = ({
  parentId,
  isParentUser,
  collectionId,
  children,
}: CollectionTreeItemProps) => {
  const { data } = useCollections({ collectionId });
  const createCollectionQuery = useCreateCollection({ parentCollectionId: collectionId });
  const deleteCollectionQuery = useDeleteCollection({ parentCollectionId: parentId });
  const [expanded, setExpanded] = useState(false);
  const { setCurrentCollection } = useCollectionStore();
  if (data === null || data === undefined) {
    return <></>;
  }

  const handleOnClick = () => {
    setCurrentCollection(data);
    if (data.subCollectionIds.length === 0) {
      return;
    }
    setExpanded(!expanded);
  };

  const renderExpandTriangle = () => {
    if (data.subCollectionIds.length > 0) {
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

  const handleCreate = async () => {
    await createCollectionQuery.mutateAsync(generateNewCollectionData(collectionId));
  };

  const handleDelete = async () => {
    await deleteCollectionQuery.mutateAsync({ collectionId, parentId, isParentUser });
  };

  const renderSubCollections = () => {
    if (data.subCollectionIds.length === 0) {
      console.log('cancelled', data.subCollectionIds.length, collectionId);
      return <></>;
    }

    return data.subCollectionIds.map((c) => {
      console.log('rendered', collectionId);
      return <CollectionTreeItem key={c} collectionId={c} parentId={collectionId} />;
    });
  };

  return (
    <FadeIn>
      <div className="border-l border-neutral-700 w-fit">
        <div className="flex flex-row justify-start w-fit group transition-colors hover:bg-neutral-800 rounded-tr-md rounded-br-md">
          <button
            className="flex flex-row text-sm hover:bg-neutral-700 pr-2 rounded-tr-md rounded-br-md transition-colors"
            onClick={handleOnClick}
          >
            <span className="text-neutral-700 text-sm pr-0.5">—</span>
            <span className="truncate">{data.name}</span>
            <span className="px-2">⋅</span>
            <span>{data.imageIds.length}</span>
            {renderExpandTriangle()}
          </button>

          <button
            className="grow text-sm transition-[background,opacity] hover:bg-neutral-700 px-1 rounded opacity-0 group-hover:opacity-100"
            onClick={handleCreate}
          >
            <PlusIcon />
          </button>
          <button
            className="text-sm transition-[background,opacity] hover:bg-neutral-700 px-1 rounded opacity-0 group-hover:opacity-100"
            onClick={handleDelete}
          >
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

        <div className={`pl-3 transition-[height] ${!expanded ? 'h-0 overflow-hidden' : 'h-fit'}`}>
          {children}
          {renderSubCollections()}
        </div>
      </div>
    </FadeIn>
  );
};
