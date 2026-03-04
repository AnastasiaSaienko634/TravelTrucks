import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteTruck {
  favorite: boolean;
  setFavoriteTruck: (truck: boolean) => void;
}

export const useFilterStore = create<FavoriteTruck>()(
  persist(
    (set) => ({
      favorite: false,

      setFavoriteTruck: (truck) =>
        set({
          favorite: truck,
        }),
    }),
    {
      name: "camper-favorite",
      partialize: (state) => ({
        favorite: state.favorite,
      }),
    },
  ),
);
