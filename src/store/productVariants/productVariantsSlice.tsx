import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
// import { message } from "antd";

interface StateAction {
  productVariantsRequest: () => Promise<any>;
  productVariantsByWithRequest: () => Promise<any>;
  productVariantsDetailRequest: () => Promise<any>;
  productVariantsFilterRequest: () => Promise<any>;
  productVariantsCategoryFilterRequest: () => Promise<any>;
  productVariantsLoading: boolean;
  productVariantByWithLoading: boolean;

  productVariantsDetailLoading: boolean;
  producVariantsList: [];
  productVariantsFilter: [];

  productVariantsDetail: {} | null;
  productVariantsFilterLoading: boolean;
  productVariantCategoryFilter: [];
  productVariantCategoryFilterLoading: boolean;
  productVariantByWithList: [];
}

const initialState: StateAction = {
  productVariantsRequest: async () => {},
  productVariantsDetailRequest: async () => {},
  productVariantsFilterRequest: async () => {},
  productVariantsCategoryFilterRequest: async () => {},
  productVariantsByWithRequest: async () => {},
  productVariantByWithLoading: false,
  productVariantByWithList: [],

  productVariantsFilter: [],
  productVariantsLoading: false,
  productVariantsDetailLoading: false,
  productVariantsFilterLoading: false,
  producVariantsList: [],
  productVariantsDetail: {},
  productVariantCategoryFilter: [],
  productVariantCategoryFilterLoading: false,
};

const productVariantsStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    productVariantsRequest: async () => {
      set({ productVariantsLoading: true });
      try {
        const { data } = await requests.productVariants();
        set({ producVariantsList: data.data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ productVariantsLoading: false });
      }
    },
    productVariantsDetailRequest: async (payload: number) => {
      set({ productVariantsDetailLoading: true });
      try {
        const { data } = await requests.productVariantsDetail(payload);
        set({ productVariantsDetail: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ productVariantsDetailLoading: false });
      }
    },
    productVariantsFilterRequest: async () => {
      set({ productVariantsFilterLoading: true });
      try {
        const { data } = await requests.productVariantsFilter();
        set({ productVariantsFilter: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ productVariantsFilterLoading: false });
      }
    },
    productVariantsCategoryFilterRequest: async () => {
      set({ productVariantByWithLoading: true });
      try {
        const { data } = await requests.productVariantsByWith();
        set({ productVariantByWithList: data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ productVariantByWithLoading: false });
      }
    },
  }))
);

export default productVariantsStore;
