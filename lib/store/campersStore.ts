import { create } from "zustand";

export const defaultEquipment: Record<string, boolean> = {
  AC: false,
  automatic: false,
  kitchen: false,
  TV: false,
  bathroom: false,
};

interface FilterStore {
  city: string;
  equipment: Record<string, boolean>;
  vehicleType: string;

  setCity: (city: string) => void;
  toggleEquipment: (items: Record<string, boolean>) => void;
  setVehicleType: (type: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  city: "",
  equipment: defaultEquipment,
  vehicleType: "",

  setCity: (city) => set({ city }),

  toggleEquipment: (items: Record<string, boolean>) =>
    set((state) => ({
      equipment: {
        ...state.equipment,
        ...items,
      },
    })),

  setVehicleType: (type) =>
    set((state) => ({
      vehicleType: state.vehicleType === type ? "" : type,
    })),

  resetFilters: () =>
    set({
      city: "",
      equipment: defaultEquipment,
      vehicleType: "",
    }),
}));
