import { create } from "zustand";

type StateAction = {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  modals?: {
    register?: boolean;
    compare_create?: boolean;
    delivery?: boolean;
    search?: boolean;
    menu?: boolean;
    card_payment?: boolean;
  };
};

const initialState: StateAction = {
  openModal: () => {},
  closeModal: () => {},
  modals: {
    register: false,
    compare_create: false,
    delivery: false,
    search: false,
    menu: false,
    card_payment: false,
  },
};

const modalsStore = create<StateAction>((set) => ({
  ...initialState,
  openModal: async (modalName) => {
    set((state) => ({ modals: { ...state.modals, [modalName]: true } }));
  },
  closeModal: async (modalName) => {
    set((state) => ({ modals: { ...state.modals, [modalName]: false } }));
  },
}));

export default modalsStore;
