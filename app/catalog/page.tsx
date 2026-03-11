"use client";
import { useEffect, useState } from "react";
import css from "./CatalogPage.module.css";
import { useFilterStore } from "@/lib/store/campersStore";
import { fetchCampersByFilter } from "@/lib/api/serverApi";
// Components
import Filters from "@/components/Filters/Filters";
import CamperList from "@/components/CamperList/CamperList";
import Loader from "@/components/Loader/Loader";

const CatalogPage = () => {
  // Location state
  const city = useFilterStore((state) => state.city);

  const vehicleTp = useFilterStore((state) => state.vehicleType);
  const vehicleEq = useFilterStore((state) => state.equipment);
  const searchTrigger = useFilterStore((state) => state.searchTrigger);

  const [loading, setLoading] = useState(false);
  const [isPageLoading, setPageLoading] = useState(true);
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    // Fetch Campers
    const fetchCampers = async () => {
      try {
        setLoading(true);

        const location = city || "";
        const vehicleEquipment = vehicleEq ?? {};
        const vehicleType = vehicleTp || "";
        // Fetch Campers by Filters
        const response = await fetchCampersByFilter(
          vehicleEquipment,
          vehicleType,
          location,
        );

        setCampers(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setPageLoading(false);
      }
    };

    fetchCampers();
  }, [searchTrigger]);

  return (
    <>
      {isPageLoading ? (
        <Loader />
      ) : (
        <div className={css.catalogContainer}>
          <div>
            {/* Camper Filter */}
            <Filters />
          </div>

          <div className={css.camperListContainer}>
            {/* Camper List */}
            <CamperList campers={campers} />
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
