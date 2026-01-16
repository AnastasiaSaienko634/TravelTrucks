import { Camper } from "@/types/campers";
import css from "./Features.module.css";

interface Props {
  camper: Camper;
}

const Features = ({ camper }: Props) => {
  return (
    <div className={css.container}>
      {/* Features */}
      <ul className={css.features}>
        {camper.transmission && <li>Automatic</li>}
        {camper.engine && <li>Petrol</li>}
        {camper.kitchen && <li>Kitchen</li>}
        {camper.AC && <li>AC</li>}
        {camper.bathroom && <li>Bathroom</li>}
        {camper.radio && <li>Radio</li>}
      </ul>
    </div>
  );
};

export default Features;
