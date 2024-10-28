import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  brandRequest: () => Promise<any>;
  brandLoading: boolean;
  brandList: [];
}

const initialState: StateAction = {
  brandRequest: async () => {},
  brandLoading: false,
  brandList: [],
};

const brandStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    brandRequest: async () => {
      set({ brandLoading: true });
      try {
        const { data } = await requests.brands();
        set({ brandList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ brandLoading: false });
      }
    },
  }))
);

export default brandStore;
