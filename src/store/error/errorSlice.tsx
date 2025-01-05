import { create } from "zustand";

export const errorSlice = create<any>((set: any) => ({
    error: null,
    setError: (error:any) => set({ error}),
  }));