type Role = "admin" | "agent";

export type Props = {
  title: string;
};
export const BASE_URL : string = 'http://localhost:3000';

export type ApiResponse<T> = {
  message: string;
  data: T;
};

export interface LoginForm {
  agentCode: string;
  password: string;
}

export interface User {
  agentCode: string;
  fullName: string;
  role: Role;
}

export interface LoginInterface {
  form: LoginForm;
  path: string;
  method: string;
}

export interface AuthState {
  user: User | null;
  login: (login: LoginInterface) => Promise<User | null>;
}

// export interface ResUser {
//     agentCode: '',
//     fullName: '',
//     passwordHash: '',
//     role: '',
//     _id: '',
//     createdAt: '',
//     updatedAt: ''
// }
