import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  serviceRequest: () => Promise<any>;
  serviceDetailRequest: () => Promise<any>;
  serviceLoading: boolean;
  serviceList: [];
  serviceDetail: {} | null;
}

const initialState: StateAction = {
  serviceRequest: async () => {},
  serviceDetailRequest: async () => {},
  serviceLoading: false,
  serviceList: [],
  serviceDetail: null,
};

const serviceStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    serviceRequest: async () => {
      set({ serviceLoading: true });
      try {
        const { data } = await requests.services();
        set({ serviceList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ serviceLoading: false });
      }
    },
    serviceDetailRequest: async (id: number) => {
      set({ serviceLoading: true });
      try {
        const { data } = await requests.serviceDetail(id);
        set({ serviceDetail: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ serviceLoading: false });
      }
    },
  }))
);

export default serviceStore;
