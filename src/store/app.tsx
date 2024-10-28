import { create } from "zustand";

type StateAction = {
  getList: () => Promise<any>;
  list: [];
  listLoading: boolean;
  changeTheme: (theme: "dark" | "light") => void;
  theme: string;
};

const initialState: StateAction = {
  getList: async () => {},
  list: [],
  listLoading: false,
  changeTheme: () => {},
  theme: "light",
};

const appStore = create<StateAction>((set) => ({
  ...initialState,

  changeTheme: (theme: "dark" | "light") => {
    set({ theme: theme });
  },
}));

export default appStore;
