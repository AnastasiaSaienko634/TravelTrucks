"use client";
import { useEffect, useState } from "react";
import css from "./CatalogPage.module.css";
import { useFilterStore } from "@/lib/store/campersStore";
import { fetchCampersByFilter } from "@/lib/api/serverApi";
// Components
import Filters from "@/components/Filters/Filters";
import CamperList from "@/components/CamperList/CamperList";
import LocationDropdown from "@/components/LocationDropdown/LocationDropdown";
import Loader from "@/components/Loader/Loader";

const CatalogPage = () => {
  // Location state
  const city = useFilterStore((state) => state.city);
  const vehicleTp = useFilterStore((state) => state.vehicleType);
  const vehicleEq = useFilterStore((state) => state.equipment);
  const [loading, setLoading] = useState(false);
  const [isPageLoading, setPageLoading] = useState(true);
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    // Fetch Campers
    const fetchCampers = async () => {
      try {
        setLoading(true);
        const location = city.length > 0 ? city : "";
        const vehicleEquipment = vehicleEq ? vehicleEq : {};
        const vechicleType = vehicleTp ? vehicleTp : "";

        // Fetch Campers by Filters
        const response = await fetchCampersByFilter(
          vehicleEquipment,
          vechicleType,
          location,
        );
        setCampers(response);
      } catch (error) {
        console.log(error, "Something went wrong...try again!");
      } finally {
        setPageLoading(false);
      }
    };

    fetchCampers();
  }, [city, vehicleTp, vehicleEq]);

  return (
    <>
      {isPageLoading ? (
        <Loader />
      ) : (
        <div className={css.catalogContainer}>
          <div>
            {/* Dropdown Location */}
            <LocationDropdown />

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
