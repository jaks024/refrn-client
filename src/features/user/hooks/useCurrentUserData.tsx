import { useContext } from 'react';
import { CurrentUserContext } from '../CurrentUserContext';

export const useCurrentUserData = () => {
  const { userData } = useContext(CurrentUserContext);
  return {
    userData,
  };
};
