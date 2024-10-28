import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  bannerRequest: () => Promise<any>;
  bannersLoading: boolean;
  bannerList: [];
}

const initialState: StateAction = {
  bannerRequest: async () => {},
  bannersLoading: false,
  bannerList: [],
};

const bannerStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    bannerRequest: async () => {
      set({ bannersLoading: true });
      try {
        const { data } = await requests.banners();
        set({ bannerList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ bannersLoading: false });
      }
    },
  }))
);

export default bannerStore;
