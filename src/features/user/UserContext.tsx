import { createContext, useContext } from 'react';
import { UserContextType } from './types';

export const UserContext = createContext<UserContextType>({
  userData: null,
});
