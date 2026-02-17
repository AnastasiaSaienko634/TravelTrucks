"use client";
import { useFilterStore } from "@/lib/store/campersStore";
import css from "./Filters.module.css";
// Icons
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { MdOutlineViewComfy } from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { useState } from "react";
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
  {
    type: "fullyIntegrated",
    label: "Fully Integrated",
    icon: <FiGrid className={css.iconFilter} />,
  },
  {
    type: "panelTruck",
    label: "Van",
    icon: <FiColumns className={css.iconFilter} />,
  },
  {
    type: "alcove",
    label: "Alcove",
    icon: <MdOutlineViewComfy className={css.iconFilter} />,
  },
];

// Search
const handleClick = () => {};

const Filters = () => {
  const [localEquipment, setLocalEquipment] = useState({
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
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
          const active = equipment[id] === true;

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
        {vehicleOptions.map(({ type, label, icon }) => {
          const active = vehicleType === type;
          return (
            <button
              onClick={() => setVehicleType(type)}
              key={type}
              className={`${css.vehicleTypeBtn} ${active ? css.btnActive : ""}`}
            >
              {icon}
              {label}
            </button>
          );
        })}
      </div>

      <button className={css.searchFilterBtn} onClick={handleClick}>
        Search
      </button>
    </>
  );
};

export default Filters;
