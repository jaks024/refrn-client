import { axios } from '@/libs/axios';
import { MutationConfig, queryClient } from '@/libs/react-query';
import { useMutation } from 'react-query';
import { CreateCollectionDto, CreatedCollectionResult, DeleteCollectionDto } from '../tree/types';

export const deleteCollection = ({
  collectionId,
  payload,
}: {
  collectionId: string;
  payload: DeleteCollectionDto;
}): Promise<CreatedCollectionResult> => {
  return axios.delete(`/collection/${collectionId}`, {
    data: payload,
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
      queryClient.invalidateQueries(['collection', parentCollectionId]);
    },
  });
};
