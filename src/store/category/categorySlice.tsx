import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  categoryRequest: () => Promise<any>;
  categoryLoading: boolean;
  categoryList: [];
}

const initialState: StateAction = {
  categoryRequest: async () => {},
  categoryLoading: false,
  categoryList: [],
};

const categoryStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    categoryRequest: async () => {
      set({ categoryLoading: true });
      try {
        const { data } = await requests.categories();
        set({ categoryList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ categoryLoading: false });
      }
    },
  }))
);

export default categoryStore;
