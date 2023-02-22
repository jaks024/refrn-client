import { axios } from '@/libs/axios';
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query';
import { Collection } from '@/types/objects';
import { useQuery } from 'react-query';

export const getCollection = ({
  collectionId,
}: {
  collectionId: string;
}): Promise<Collection> => {
  return axios.post(`/collection/${collectionId}`);
};

type QueryFnType = typeof getCollection;

type UseCollectionOptions = {
  collectionId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useCollection = ({
  collectionId,
  config,
}: UseCollectionOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['collection', collectionId],
    queryFn: () => getCollection({ collectionId }),
  });
};
