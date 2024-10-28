import { create } from "zustand";

interface AuthStore {
  userNumber: string | null;
  setUserNumber: (payload: string) => void;
  userList: { [key: string]: any } | null;
  setUserList: (payload: any) => void;
}

const authStore = create<AuthStore>((set) => ({
  userNumber: null,
  setUserNumber: (payload: string) => set({ userNumber: payload }),
  userList: null,
  setUserList: (payload: any) => set({ userList: payload }),
}));

export default authStore;
