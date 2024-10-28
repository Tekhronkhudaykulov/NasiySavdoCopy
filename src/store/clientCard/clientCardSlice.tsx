import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  clientCardListRequest: () => Promise<any>;
  clientCardAddRequest: () => Promise<any>;
  clientCardDeleteRequest: () => Promise<any>;
  clientCardAddToOrderRequest: () => Promise<any>;
  clientCardDeleteSelectedRequest: () => Promise<any>;

  clientCardAddToOrderLoading: boolean;

  clientCardAddLoading: boolean;
  clientCardList: [];
  clientCardListLoading: boolean;
  clientCardDeleteLoading: boolean;
  clientCardDeleteSelectedLoading: boolean;
}

const initialState: StateAction = {
  clientCardListRequest: async () => {},
  clientCardAddRequest: async () => {},
  clientCardDeleteRequest: async () => {},
  clientCardAddToOrderRequest: async () => {},
  clientCardDeleteSelectedRequest: async () => {},
  clientCardAddToOrderLoading: false,
  clientCardDeleteSelectedLoading: false,

  clientCardList: [],
  clientCardAddLoading: false,
  clientCardDeleteLoading: false,

  clientCardListLoading: false,
};

const clientCartStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    clientCardListRequest: async () => {
      set({ clientCardListLoading: true });
      try {
        const { data } = await requests.clientCartList();
        set({ clientCardList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientCardListLoading: false });
      }
    },
    clientCardAddRequest: async () => {
      set({ clientCardAddLoading: true });
      try {
        const { data } = await requests.clientCartAddList();
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientCardAddLoading: false });
      }
    },
    clientCardDeleteRequest: async () => {
      set({ clientCardDeleteLoading: true });
      try {
        const { data } = await requests.clientCartDeleteList();
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientCardDeleteLoading: false });
      }
    },
    clientCardAddToOrderRequest: async () => {
      set({ clientCardAddToOrderLoading: true });
      try {
        const { data } = await requests.clientCartAddToOrder();
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientCardAddToOrderLoading: false });
      }
    },
    clientCardDeleteSelectedRequest: async () => {
      set({ clientCardDeleteSelectedLoading: true });
      try {
        const { data } = await requests.clientCartDeleteSelected();
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientCardDeleteSelectedLoading: false });
      }
    },
  }))
);

export default clientCartStore;
