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
  const { searchTrigger, vehicleType, equipment, city } = useFilterStore();
  const [isLoading, setLoading] = useState(false);
  const [isPageLoading, setPageLoading] = useState(true);
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    // Fetch Campers
    const fetchCampers = async () => {
      try {
        setLoading(true);

        const location = city || "";
        const vehicleEquipment = equipment ?? {};
        const vehicleTp = vehicleType || "";
        // Fetch Campers by Filters
        const response = await fetchCampersByFilter(
          vehicleEquipment,
          vehicleTp,
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
            {campers && <CamperList campers={campers} />}
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
