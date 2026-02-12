"use client";
import { useFilterStore } from "@/lib/store/campersStore";
import React from "react";
import css from "./Filters.module.css";
// Icons
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { RiListRadio } from "react-icons/ri";
import { MdAir } from "react-icons/md";

const equipmentOptions = [
  { id: "AC", label: "AC" },
  { id: "automatic", label: "Automatic" },
  { id: "kitchen", label: "Kitchen" },
  { id: "TV", label: "TV" },
  { id: "bathroom", label: "Bathroom" },
];

const Filters = () => {
  const {
    equipment,
    vehicleType,
    toggleEquipment,
    setVehicleType,
    resetFilters,
  } = useFilterStore();
  return (
    <>
      <h3 className={css.filtersTitle}>Filters</h3>
      <h2 className={css.vichleEquipment}>Vehicle equipment</h2>
      <div className={css.equipmentList}>
        {equipmentOptions.map(({ id, label }) => {
          const active = equipment.includes(id);

          return (
            <button
              key={id}
              onClick={() => toggleEquipment(id)}
              className={`${css.btnSelect} ${active ? css.btnActive : ""}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
