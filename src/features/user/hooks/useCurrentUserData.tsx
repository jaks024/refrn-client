import { useContext, useMemo } from 'react';
import { useUpdateUser } from '../api/updateUserData';
import { CurrentUserContext } from '../CurrentUserContext';
import { UserDto } from '../types';

export const useCurrentUserData = () => {
  const { userData } = useContext(CurrentUserContext);
  const updateUserQuery = useUpdateUser({ userId: userData._id });
  const userDataDto: UserDto = useMemo(() => {
    return {
      username: userData.username,
      email: userData.email,
      googleId: userData.googleId,
      collectionIds: userData.collectionIds,
    };
  }, [userData]);
  return {
    userData,
    updateUserQuery,
    userDataDto,
  };
};
