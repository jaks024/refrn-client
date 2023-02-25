import { QueryConfig, ExtractFnReturnType } from '@/libs/react-query';
import axios from 'axios';
import { useQueries } from 'react-query';
import { CollectionIdentifierTree } from '../tree/types';

export const getSubCollections = ({
  collectionId,
}: {
  collectionId: string;
}): Promise<CollectionIdentifierTree> => {
  return axios.get(`/collection/${collectionId}/sub`);
};

type QueryFnType = typeof getSubCollections;

type UseSubCollectionsOptions = {
  collectionIds: string[];
  config?: QueryConfig<QueryFnType>;
};

export const useSubCollections = ({ collectionIds, config }: UseSubCollectionsOptions) => {
  return useQueries<ExtractFnReturnType<QueryFnType>[]>(
    collectionIds.map((collectionId) => {
      return {
        ...config,
        queryKey: ['', collectionId],
        queryFn: () => getSubCollections({ collectionId }),
      };
    }),
  );
};
