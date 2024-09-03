import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { customSessionStorage } from '../storages/session-storage';
import { AuthServices } from '@/services/authServices';
import { parseJwt } from '@/lib/utils';
import { loginClientAction } from '@/components/auth/SignupForm/auth.action';

export interface AuthStatus {
  status: 'pending' | 'authorized' | 'unauthorized';
}

export interface AuthState {

  status: 'pending' | 'authorized' | 'unauthorized';
  token?: string;

  id?: string;

  setToken: (token: string) => void;
  loginUser: (email: string, password: string) => Promise<{ token: string, id: string }>;

  logoutUser: () => void;
}


const storeApi: StateCreator<AuthState> = (set) => ({

  status: 'unauthorized',
  token: undefined,
  id: undefined,


  setToken: (token: string) => { set({ token: token }); },
  loginUser: async (email: string, password: string) => {

    try {
      set({ status: 'pending' });
      const response = await loginClientAction({ email, password });
      console.log(response.data.token);
      const { id } = parseJwt(response.data.token);
      const token = response.data.token;
      set({ status: 'authorized', token, id });
      return { token, id };

    } catch (error) {
      set({ status: 'unauthorized', token: undefined, id: undefined });
      throw 'Unauthorized';
    }

  },
  logoutUser: () => {
    set({ status: 'unauthorized', token: undefined, id: undefined });
  }

});


export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      storeApi,
      { name: 'auth-storage', storage: customSessionStorage }
    )
  )
);