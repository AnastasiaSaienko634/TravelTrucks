import { create } from "zustand";

interface FilterStore {
  city: string;
  equipment: string[];
  vehicleType: string | null;

  setCity: (city: string) => void;
  toggleEquipment: (item: string) => void;
  setVehicleType: (type: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  city: "",
  equipment: [],
  vehicleType: null,

  setCity: (city) => set({ city }),

  toggleEquipment: (item) =>
    set((state) => ({
      equipment: state.equipment.includes(item)
        ? state.equipment.filter((i) => i !== item)
        : [...state.equipment, item],
    })),

  setVehicleType: (type) =>
    set((state) => ({
      vehicleType: state.vehicleType === type ? null : type,
    })),

  resetFilters: () =>
    set({
      city: "",
      equipment: [],
      vehicleType: null,
    }),
}));
