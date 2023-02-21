import { User } from '@/types/objects';
import { PropsWithChildren, useMemo, useState } from 'react';
import { UserContextType } from './types';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<User>();

  const contextData: UserContextType = useMemo(() => {
    return {
      userData,
    };
  }, [userData]);

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};
