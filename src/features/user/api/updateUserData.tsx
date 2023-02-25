import { axios } from '@/libs/axios';
import { MutationConfig, queryClient } from '@/libs/react-query';
import { useMutation } from 'react-query';
import { UserDto } from '../types';

export const updateUser = ({ id, payload }: { id: string; payload: UserDto }): Promise<void> => {
  return axios.put(`/user/${id}`, payload);
};

type UseUpdateUserOptions = {
  userId: string;
  config?: MutationConfig<typeof updateUser>;
};

export const useUpdateUser = ({ userId, config }: UseUpdateUserOptions) => {
  return useMutation({
    ...config,
    mutationFn: updateUser,
    onSuccess() {
      queryClient.invalidateQueries(['userdata', userId]);
    },
  });
};
