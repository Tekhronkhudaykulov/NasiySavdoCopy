import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  compareRequest: () => Promise<any>;
  compareAddRequest: () => Promise<any>;
  compareLoading: boolean;
  compareList: [];
}

const initialState: StateAction = {
  compareRequest: async () => {},
  compareAddRequest: async () => {},
  compareLoading: false,
  compareList: [],
};

const comparesStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    compareRequest: async () => {
      set({ compareLoading: true });
      try {
        const { data } = await requests.compares();
        set({ compareList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ compareLoading: false });
      }
    },
    compareAddRequest: async (id: number) => {
      set({ compareLoading: true });
      try {
        const { data } = await requests.addCompares(id);
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ compareLoading: false });
      }
    },
  }))
);

export default comparesStore;
