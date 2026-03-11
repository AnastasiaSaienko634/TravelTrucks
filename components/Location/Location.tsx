"use client";

import { useFilterStore } from "@/lib/store/campersStore";
import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";

const Location = () => {
  const { setCity, city } = useFilterStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setCity(query);
  };

  return (
    <div className={css.locationContainer}>
      <input
        type="text"
        className={css.inputLocation}
        placeholder="City"
        onChange={handleChange}
        value={city}
      />
      <CiMap className={css.iconLocation} />
    </div>
  );
};

export default Location;
