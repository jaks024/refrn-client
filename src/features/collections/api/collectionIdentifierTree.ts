import { axios } from '@/libs/axios';
import { ExtractFnReturnType, queryClient, QueryConfig } from '@/libs/react-query';
import { useQueries, useQuery } from 'react-query';
import { CollectionIdentifierTree } from '../tree/types';

export const getCollectionIdentifierTree = ({
  collectionId,
}: {
  collectionId: string;
}): Promise<CollectionIdentifierTree> => {
  return axios.get(`/collection/${collectionId}/all`);
};

type QueryFnType = typeof getCollectionIdentifierTree;

type UseCollectionIdentifierTreeOptions = {
  collectionIds: string[];
  config?: QueryConfig<QueryFnType>;
};

export const useCollectionIdentifierTree = ({
  collectionIds,
  config,
}: UseCollectionIdentifierTreeOptions) => {
  return useQueries<ExtractFnReturnType<QueryFnType>[]>(
    collectionIds.map((collectionId) => {
      return {
        ...config,
        queryKey: ['collection-identifier', collectionId],
        queryFn: () => getCollectionIdentifierTree({ collectionId }),
      };
    }),
  );
};

export const InvalidateCollection = (collectionId) => {
  queryClient.invalidateQueries(['collection-identifier', collectionId]);
};
