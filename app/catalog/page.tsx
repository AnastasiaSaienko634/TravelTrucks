"use client";
import CamperList from "@/components/CamperList/CamperList";
import LocationDropdown from "@/components/LocationDropdown/LocationDropdown";
import css from "./CatalogPage.module.css";
import { useFilterStore } from "@/lib/store/campersStore";
import { useEffect, useState } from "react";
import { fetchCampersbyCategorie } from "@/lib/api/serverApi";
import Filters from "@/components/Filters/Filters";

const CatalogPage = () => {
  const city = useFilterStore((state) => state.city);

  const [campers, setCampers] = useState([]);

  useEffect(() => {
    const fetchCampers = async () => {
      const query = city.length > 0 ? city : "";
      const response = await fetchCampersbyCategorie(query);
      setCampers(response);
    };

    fetchCampers();
  }, [city]);
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
