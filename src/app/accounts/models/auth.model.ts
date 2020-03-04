import { User } from './user.model';

export class Auth {
  currentUser: User;
  isAuthenticated: boolean;
  error_msg?: string;
  success_msg?: string;
}