import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  newsRequest: () => Promise<any>;
  newsDetailRequest: () => Promise<any>;
  tagsRequest: () => Promise<any>;
  newsLoading: boolean;
  newsList: [];
  newsDetail: {} | null;
  tagsList: [];
}

const initialState: StateAction = {
  newsRequest: async () => {},
  newsDetailRequest: async () => {},
  tagsRequest: async () => {},
  newsLoading: false,
  newsList: [],
  newsDetail: null,
  tagsList: [],
};

const newsStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    newsRequest: async () => {
      set({ newsLoading: true });
      try {
        const { data } = await requests.news();
        set({ newsList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ newsLoading: false });
      }
    },
    newsDetailRequest: async (id: number) => {
      set({ newsLoading: true });
      try {
        const { data } = await requests.newsDetail(id);
        set({ newsDetail: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ newsLoading: false });
      }
    },
    tagsRequest: async () => {
      set({ newsLoading: true });
      try {
        const { data } = await requests.tags();
        set({ tagsList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ newsLoading: false });
      }
    },
  }))
);

export default newsStore;
