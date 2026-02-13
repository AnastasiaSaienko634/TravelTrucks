"use client";
import { useFilterStore } from "@/lib/store/campersStore";
import React from "react";
import css from "./Filters.module.css";
// Icons
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { MdAir } from "react-icons/md";

const equipmentOptions = [
  { id: "AC", label: "AC", icon: <MdAir className={css.iconFilter} /> },
  {
    id: "automatic",
    label: "Automatic",
    icon: <TbAutomaticGearbox className={css.iconFilter} />,
  },
  {
    id: "kitchen",
    label: "Kitchen",
    icon: <GrCafeteria className={css.iconFilter} />,
  },
  { id: "TV", label: "TV", icon: <FaGasPump className={css.iconFilter} /> },
  {
    id: "bathroom",
    label: "Bathroom",
    icon: <FaBath className={css.iconFilter} />,
  },
];

const vehicleOptions = [
  { type: "fullyIntegrated", label: "Fully Integrated" },
  { type: "panelTruck", label: "Van" },
  { type: "alcove", label: "Alcove" },
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
        {equipmentOptions.map(({ id, label, icon }) => {
          const active = equipment.includes(id);

          return (
            <button
              key={id}
              onClick={() => toggleEquipment(id)}
              className={`${css.btnSelect} ${active ? css.btnActive : ""}`}
            >
              {icon}
              {label}
            </button>
          );
        })}
      </div>

      <h2 className={css.vehicleTypeTitle}>Vehicle type</h2>
      <div className={css.vehicleTypeList}>
        {vehicleOptions.map(({ type, label }) => {
          return (
            <button key={type} className={css.vehicleTypeBtn}>
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
