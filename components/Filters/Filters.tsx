"use client";
import { defaultEquipment, useFilterStore } from "@/lib/store/campersStore";
import css from "./Filters.module.css";
// Icons
import { LiaTrashAltSolid } from "react-icons/lia";
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

const Filters = () => {
  const [localEquipment, setLocalEquipment] =
    useState<Record<string, boolean>>(defaultEquipment);

  const [localVehicleType, setLocalVehicleType] = useState<string>("");

  const toggleLocalEquipment = (id: string) => {
    setLocalEquipment((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const {
    equipment,
    vehicleType,
    toggleEquipment,
    setVehicleType,
    resetFilters,
  } = useFilterStore();

  // Search
  const handleClick = () => {
    if (localEquipment) {
      toggleEquipment(localEquipment);
    }

    if (localVehicleType) {
      setVehicleType(localVehicleType);
    }
  };
  return (
    <>
      <h3 className={css.filtersTitle}>Filters</h3>
      <h2 className={css.vichleEquipment}>Vehicle equipment</h2>
      <div className={css.equipmentList}>
        {equipmentOptions.map(({ id, label, icon }) => {
          const active = localEquipment[id];

          return (
            <button
              key={id}
              onClick={() => toggleLocalEquipment(id)}
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
          const active = localVehicleType === type;
          return (
            <button
              onClick={() => setLocalVehicleType(type)}
              key={type}
              className={`${css.vehicleTypeBtn} ${active ? css.btnActive : ""}`}
            >
              {icon}
              {label}
            </button>
          );
        })}
      </div>
      <div className={css.buttons}>
        <button className={css.searchFilterBtn} onClick={handleClick}>
          Search
        </button>
        <button
          className={css.resetFiltersBtn}
          onClick={() => {
            resetFilters();
            setLocalEquipment(defaultEquipment);
            setLocalVehicleType("");
          }}
        >
          <LiaTrashAltSolid className={css.resetIcon} />
        </button>
      </div>
    </>
  );
};

export default Filters;
