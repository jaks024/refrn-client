import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const useUserData = () => {
  const { userData } = useContext(UserContext);
  return {
    userData,
  };
};
