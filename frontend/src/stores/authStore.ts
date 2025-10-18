import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const USER_ROLE = {
  ADMIN: 'admin',
  HR: 'hr',
  UNIVERSITY: 'university'
} as const

export type TUser = {
  id: number;
  email: string;
  role: typeof USER_ROLE[keyof typeof USER_ROLE];
  name: string;
}

export type TAuthState = {
  user: TUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<TAuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: (email: string, password: string): boolean => {
        const users: Record<string, TUser> = {
          'admin@test.com': { 
            id: 1, 
            email: 'admin@test.com', 
            role: USER_ROLE.ADMIN, 
            name: 'Администратор' 
          },
          'hr@test.com': { 
            id: 2, 
            email: 'hr@test.com', 
            role: USER_ROLE.HR, 
            name: 'HR Специалист' 
          },
          'university@test.com': { 
            id: 3, 
            email: 'university@test.com', 
            role: USER_ROLE.UNIVERSITY, 
            name: 'Представитель ВУЗа' 
          }
        };

        const user = users[email];
        
        if (user && password === '123456') {
          set({ 
            user,
            isAuthenticated: true 
          });
          return true;
        }
        return false;
      },
      
      logout: (): void => {
        set({ 
          user: null,
          isAuthenticated: false 
        });
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);