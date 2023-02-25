import { axios } from '@/libs/axios';
import { MutationConfig, queryClient } from '@/libs/react-query';
import { useMutation } from 'react-query';
import { CreateCollectionDto, CreatedCollectionResult } from '../tree/types';

export const createCollection = (
  payload: CreateCollectionDto,
): Promise<CreatedCollectionResult> => {
  return axios.post(`/collection/`, payload);
};

type UseCreateCollectionOptions = {
  parentCollectionId: string;
  config?: MutationConfig<typeof createCollection>;
};

export const useCreateCollection = ({ parentCollectionId, config }: UseCreateCollectionOptions) => {
  return useMutation({
    ...config,
    mutationFn: createCollection,
    onSuccess(data, _, __) {
      if (config && config.onSuccess) {
        config.onSuccess(data, _, __);
      }
      queryClient.invalidateQueries(parentCollectionId);
    },
  });
};
