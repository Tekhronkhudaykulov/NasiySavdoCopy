import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  clientFavouriteListRequest: () => Promise<any>;
  clientFavouriteAddRequest: () => Promise<any>;
  clientFavouriteDeleteRequest: () => Promise<any>;
  clientFavouriteClearRequest: () => Promise<any>;

  clientFavouriteList: [];
  clientFavouriteListLoading: boolean;
  clientFavouriteAddLoading: boolean;
  clientFavouriteDeleteLoading: boolean;
  clientFavouriteClearLoading: boolean;
}

const initialState: StateAction = {
  clientFavouriteListRequest: async () => {},
  clientFavouriteAddRequest: async () => {},
  clientFavouriteDeleteRequest: async () => {},
  clientFavouriteClearRequest: async () => {},

  clientFavouriteList: [],
  clientFavouriteListLoading: false,
  clientFavouriteAddLoading: false,
  clientFavouriteClearLoading: false,

  clientFavouriteDeleteLoading: false,
};

const clientFavouriteStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    clientFavouriteListRequest: async () => {
      set({ clientFavouriteListLoading: true });
      try {
        const { data } = await requests.clientFavourites();
        set({ clientFavouriteList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientFavouriteListLoading: false });
      }
    },
    clientFavouriteAddRequest: async (payload: number) => {
      set({ clientFavouriteAddLoading: true });
      try {
        const { data } = await requests.clientFavouritesAdd(payload);
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientFavouriteAddLoading: false });
      }
    },
    clientFavouriteDeleteRequest: async (payload: number) => {
      set({ clientFavouriteDeleteLoading: true });
      try {
        const { data } = await requests.clientFavouritesDelete(payload);
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientFavouriteDeleteLoading: false });
      }
    },
    clientFavouriteClearRequest: async (payload: number) => {
      set({ clientFavouriteClearLoading: true });
      try {
        const { data } = await requests.clientFavouritesClear(payload);
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ clientFavouriteClearLoading: false });
      }
    },
  }))
);

export default clientFavouriteStore;
