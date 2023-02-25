import { axios } from '@/libs/axios';
import { queryClient, QueryConfig } from '@/libs/react-query';
import { Collection } from '@/types/objects';
import { useQuery } from 'react-query';

export const getCollection = ({ collectionId }: { collectionId: string }): Promise<Collection> => {
  return axios.get(`/collection/${collectionId}`);
};

type QueryFnType = typeof getCollection;

type UseCollectionOptions = {
  collectionId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useCollections = ({ collectionId, config }: UseCollectionOptions) => {
  return useQuery({
    ...config,
    queryKey: collectionId,
    queryFn: () => getCollection({ collectionId }),
  });
};

export const InvalidateCollection = (collectionId) => {
  queryClient.invalidateQueries(collectionId);
};
