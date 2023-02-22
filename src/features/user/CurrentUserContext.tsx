import { createContext, useContext } from 'react';
import { UserContextType } from './types';

export const CurrentUserContext = createContext<UserContextType>({
  userData: null,
});
