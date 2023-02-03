import { create } from 'zustand';

const useUserStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  user: {
    email: null,
    userName: null,
    firstName: null,
    lastName: null,
  },
  setUser: (user) => set({ user }),
  logoutUser: () =>
    set({
      isLoggedIn: false,
      user: {
        email: null,
        userName: null,
        firstName: null,
        lastName: null,
      },
    }),
}));

export default useUserStore;
