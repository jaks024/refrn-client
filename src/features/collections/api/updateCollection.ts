import { axios } from '@/libs/axios';
import { MutationConfig } from '@/libs/react-query';
import { useMutation } from 'react-query';
import { UpdateCollectionDto } from '../tree/types';

export const updateCollection = ({
  id,
  payload,
}: {
  id: string;
  payload: string[];
}): Promise<void> => {
  return axios.put(`/collection/${id}/sub`, payload);
};

type UseUpdateCollectionOptions = {
  config?: MutationConfig<typeof updateCollection>;
};

export const useUpdateCollection = ({ config }: UseUpdateCollectionOptions) => {
  return useMutation({
    ...config,
    mutationFn: updateCollection,
  });
};
