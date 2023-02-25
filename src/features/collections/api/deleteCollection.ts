import { axios } from '@/libs/axios';
import { MutationConfig, queryClient } from '@/libs/react-query';
import { Collection } from '@/types/objects';
import { useMutation } from 'react-query';

export const deleteCollection = ({
  collectionId,
  parentId,
  isParentUser,
}: {
  collectionId: string;
  parentId: string;
  isParentUser: boolean;
}): Promise<Collection> => {
  return axios.delete(`/collection/${collectionId}`, {
    data: {
      parentId,
      isParentUser,
    },
  });
};

type UseDeleteCollectionOptions = {
  parentCollectionId: string;
  config?: MutationConfig<typeof deleteCollection>;
};

export const useDeleteCollection = ({ parentCollectionId, config }: UseDeleteCollectionOptions) => {
  return useMutation({
    ...config,
    mutationFn: deleteCollection,
    onSuccess() {
      queryClient.invalidateQueries(parentCollectionId);
    },
  });
};
