import { CollectionTreeItem } from './ColletionTreeItem';
import { useCurrentUserData } from '@/features/user/hooks/useCurrentUserData';
import { useCreateCollection } from '../../api/createCollection';
import { PlusIcon } from '@/components/Icons';
import { generateNewCollectionData } from '../constants';
import SimpleBar from 'simplebar-react';

export const CollectionTree = () => {
  const { userData, updateUserQuery, userDataDto } = useCurrentUserData();

  const createCollectionQuery = useCreateCollection({
    parentCollectionId: '',
    config: {
      onSuccess(data, _, __) {
        console.log(data);
        userDataDto.collectionIds.push(data.id);
        updateUserQuery.mutate({ id: userData._id, payload: userDataDto });
      },
    },
  });

  const renderTreeItem = (collectionIds: string[]) => {
    if (collectionIds.length === 0) {
      return (
        <div className="text-sm font-bold text-neutral-700 text-center">
          begin by creating a collection!
        </div>
      );
    }
    return collectionIds.map((id: string) => {
      console.log('rendered');
      return <CollectionTreeItem key={id} collectionId={id} parentId={userData._id} isParentUser />;
    });
  };

  const handleCreate = async () => {
    await createCollectionQuery.mutateAsync(generateNewCollectionData());
  };

  return (
    <div className="flex flex-col px-6 h-full overflow-hidden">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl leading-loose">your collections</h2>
        <button
          className="text-sm transition-[background,opacity]  hover:bg-neutral-700 px-4 rounded group-hover:opacity-100"
          onClick={handleCreate}
        >
          <PlusIcon />
        </button>
      </div>
      <div className="grow overflow-hidden pb-10">
        <SimpleBar className="flex pb-2 pr-2 h-full">
          {renderTreeItem(userData.collectionIds)}
        </SimpleBar>
      </div>
    </div>
  );
};
