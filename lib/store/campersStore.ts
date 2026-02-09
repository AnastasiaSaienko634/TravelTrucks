import { create } from "zustand";

interface FilterStore {
  city: string;
  setCity: (city: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  city: "",
  setCity: (city) => set({ city }),
}));
