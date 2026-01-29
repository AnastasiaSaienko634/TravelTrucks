"use client";
import css from "./LocationDropdown.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { locationList } from "@/types/locationList";
import { CiMap } from "react-icons/ci";

const LocationDropdown = () => {
  const pathname = usePathname(); //take params from URL
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const slug = pathname.split("/").pop();
  const currentLocation = locationList.find(
    (location) => location.slug === slug,
  );
  const handleSelect = (slug: string) => {
    setOpen(false);
    router.push(`/catalog/filter/${slug}`);
  };
  return (
    <div className={css.locationContainer}>
      <p className={css.locationTitle}>Location</p>
      <button onClick={() => setOpen(!open)} className={css.btnLocation}>
        <CiMap className={css.iconLocation} />{" "}
        {currentLocation?.label ?? "City"}
      </button>

      {open && (
        <ul>
          {locationList.map((location) => (
            <li key={location.slug} onClick={() => handleSelect(location.slug)}>
              {location.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;
