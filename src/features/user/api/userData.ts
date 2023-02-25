import { axios } from '@/libs/axios';
import { ExtractFnReturnType, QueryConfig } from '@/libs/react-query';
import { User } from '@/types/objects';
import { useQuery } from 'react-query';

export const getUserData = ({ userId }: { userId: string }): Promise<User> => {
  return axios.get(`/user/${userId}`);
};

type QueryFnType = typeof getUserData;

type UseUserDataOptions = {
  userId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useUserData = ({ userId, config }: UseUserDataOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: userId,
    queryFn: () => getUserData({ userId }),
  });
};
