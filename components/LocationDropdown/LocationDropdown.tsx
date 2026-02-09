"use client";
import css from "./LocationDropdown.module.css";
import { useState } from "react";
import { locationList } from "@/types/locationList";
import { CiMap } from "react-icons/ci";
import { useFilterStore } from "@/lib/store/campersStore";

const LocationDropdown = () => {
  const city = useFilterStore((state) => state.city);
  const setCity = useFilterStore((state) => state.setCity);

  const [open, setOpen] = useState(false);

  const handleSelect = (slug: string) => {
    setOpen(false);
    setCity(slug);
  };
  return (
    <div className={css.locationContainer}>
      <p className={css.locationTitle}>Location</p>
      <button onClick={() => setOpen(!open)} className={css.btnLocation}>
        <CiMap className={css.iconLocation} /> {city.length > 0 ? city : "City"}
      </button>

      {open && (
        <ul className={css.locationListItems}>
          <li
            className={css.locationItem}
            onClick={() => {
              setCity("");
              setOpen(false);
            }}
          >
            All City
          </li>
          {locationList.map((location) => (
            <li
              className={css.locationItem}
              key={location.slug}
              onClick={() => handleSelect(location.slug)}
            >
              {location.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;
