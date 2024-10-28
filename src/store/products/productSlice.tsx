import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  productRequest: () => Promise<any>;
  productLoading: boolean;
  productList: [];
}

const initialState: StateAction = {
  productRequest: async () => {},
  productLoading: false,
  productList: [],
};

const productStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    productRequest: async () => {
      set({ productLoading: true });
      try {
        const { data } = await requests.product();
        set({ productList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ productLoading: false });
      }
    },
  }))
);

export default productStore;
