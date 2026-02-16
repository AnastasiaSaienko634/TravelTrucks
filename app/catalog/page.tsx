"use client";
import CamperList from "@/components/CamperList/CamperList";
import LocationDropdown from "@/components/LocationDropdown/LocationDropdown";
import css from "./CatalogPage.module.css";
import { useFilterStore } from "@/lib/store/campersStore";
import { useEffect, useState } from "react";
import { fetchCampersByFilter } from "@/lib/api/serverApi";
import Filters from "@/components/Filters/Filters";

const CatalogPage = () => {
  const city = useFilterStore((state) => state.city);
  const vehicleTp = useFilterStore((state) => state.vehicleType);
  const vehicleEq = useFilterStore((state) => state.equipment);
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    const fetchCampers = async () => {
      const location = city.length > 0 ? city : "";
      const vehicleEquipment = vehicleEq ? vehicleEq : {};
      const vechicleType = vehicleTp ? vehicleTp : "";

      const response = await fetchCampersByFilter(
        vehicleEquipment,
        vechicleType,
        location,
      );
      setCampers(response);
    };

    fetchCampers();
  }, [city, vehicleTp, vehicleEq]);
  return (
    <div className={css.catalogContainer}>
      <div>
        <LocationDropdown />
        <Filters />
      </div>
      <CamperList campers={campers} />
    </div>
  );
};

export default CatalogPage;
