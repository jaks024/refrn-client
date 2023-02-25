import { axios } from '@/libs/axios';
import { MutationConfig } from '@/libs/react-query';
import { useMutation } from 'react-query';

export const updateCollection = ({
  id,
  payload,
}: {
  id: string;
  payload: string[];
}): Promise<void> => {
  return axios.put(`/collection/${id}/sub`, payload);
};

type UseUpdateCollectionSubOptions = {
  config?: MutationConfig<typeof updateCollection>;
};

export const useUpdateCollectionSub = ({ config }: UseUpdateCollectionSubOptions) => {
  return useMutation({
    ...config,
    mutationFn: updateCollection,
  });
};
