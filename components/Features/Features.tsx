import { Camper } from "@/types/campers";
import css from "./Features.module.css";
// Icons
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { RiListRadio } from "react-icons/ri";
import { MdAir } from "react-icons/md";

interface Props {
  camper: Camper;
}

const Features = ({ camper }: Props) => {
  const details = [
    { label: "Form", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];
  return (
    <div className={css.container}>
      {/* Features */}
      <ul className={css.features}>
        {camper.transmission && (
          <li className={css.itemFeatures}>
            <TbAutomaticGearbox />
            Automatic
          </li>
        )}
        {camper.engine && (
          <li className={css.itemFeatures}>
            <FaGasPump />
            Petrol
          </li>
        )}
        {camper.kitchen && (
          <li className={css.itemFeatures}>
            <GrCafeteria />
            Kitchen
          </li>
        )}
        {camper.AC && (
          <li className={css.itemFeatures}>
            <MdAir />
            AC
          </li>
        )}
        {camper.bathroom && (
          <li className={css.itemFeatures}>
            <FaBath />
            Bathroom
          </li>
        )}
        {camper.radio && (
          <li className={css.itemFeatures}>
            <RiListRadio />
            Radio
          </li>
        )}
      </ul>

      {/* Details */}
      <h2 className={css.titleVehicle}>Vehicle details</h2>

      <ul className={css.details}>
        {details.map((detail) => (
          <li className={css.itemDetails} key={detail.label}>
            <p>{detail.label}</p>
            <p>{detail.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
