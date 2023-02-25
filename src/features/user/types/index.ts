import { User } from '@/types/objects';

export interface UserContextType {
  userData: User;
}

export interface UserDto {
  username: string;
  email: string;
  googleId: string;
  collectionIds: string[];
}
