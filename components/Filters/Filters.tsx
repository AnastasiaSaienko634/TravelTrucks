"use client";
import { defaultEquipment, useFilterStore } from "@/lib/store/campersStore";
import css from "./Filters.module.css";
// Icons
import { LiaTrashAltSolid } from "react-icons/lia";
import { MdTv } from "react-icons/md";
import { GrCafeteria } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { MdOutlineViewComfy } from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const equipmentOptions = [
  { id: "AC", label: "AC", icon: <MdAir className={css.iconFilter} /> },
  {
    id: "kitchen",
    label: "Kitchen",
    icon: <GrCafeteria className={css.iconFilter} />,
  },
  { id: "TV", label: "TV", icon: <MdTv className={css.iconFilter} /> },
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
  const { toggleEquipment, setVehicleType, resetFilters } = useFilterStore();

  const equipment = useFilterStore((state) => state.equipment);
  const vehicleType = useFilterStore((state) => state.vehicleType);

  const [localEquipment, setLocalEquipment] = useState(equipment);
  const [localVehicleType, setLocalVehicleType] = useState(vehicleType);

  useEffect(() => {
    setLocalEquipment(equipment);
  }, [equipment]);

  useEffect(() => {
    setLocalVehicleType(vehicleType);
  }, [vehicleType]);
  const toggleLocalEquipment = (id: string) => {
    setLocalEquipment((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Search
  const handleClick = () => {
    toggleEquipment(localEquipment);
    setVehicleType(localVehicleType);
    toast.success("Filters applied! Showing results…");
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
              onClick={() =>
                setLocalVehicleType((prev) => (prev === type ? "" : type))
              }
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
            toast.success("Filters was cleaned!");
            resetFilters();
            setLocalEquipment({ ...defaultEquipment });
            setLocalVehicleType("");
          }}
        >
          <LiaTrashAltSolid className={css.resetIcon} />
        </button>
      </div>
      {/* react hot toast */}
      <Toaster />
    </>
  );
};

export default Filters;
