import { User } from '@/types/objects';
import { PropsWithChildren, useMemo, useState } from 'react';
import { UserContextType } from './types';
import { CurrentUserContext } from './CurrentUserContext';
import { useUserData } from './api/userData';

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<User>();

  useUserData({
    userId: '63f2ca792570c6c3f23b5ce9',
    config: {
      onSuccess(data) {
        console.log(data);
        setUserData(data);
      },
    },
  });

  const contextData: UserContextType = useMemo(() => {
    return {
      userData,
    };
  }, [userData]);

  return (
    <CurrentUserContext.Provider value={contextData}>
      {children}
    </CurrentUserContext.Provider>
  );
};
