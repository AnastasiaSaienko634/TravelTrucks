import { create } from "zustand";

interface FilterStore {
  city: string;
  equipment: Record<string, boolean>;
  vehicleType: string;

  setCity: (city: string) => void;
  toggleEquipment: (item: string) => void;
  setVehicleType: (type: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  city: "",
  equipment: {},
  vehicleType: "",

  setCity: (city) => set({ city }),

  toggleEquipment: (item) =>
    set((state) => ({
      equipment: {
        ...state.equipment,
        [item]: !state.equipment[item],
      },
    })),

  setVehicleType: (type) =>
    set((state) => ({
      vehicleType: state.vehicleType === type ? "" : type,
    })),

  resetFilters: () =>
    set({
      city: "",
      equipment: {},
      vehicleType: "",
    }),
}));
