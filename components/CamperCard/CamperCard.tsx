import { Camper } from "@/types/campers";
import css from "./CamperCard.module.css";

interface CamperCardProp {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProp) => {
  return (
    <div className={css.card}>
      {/* Image */}
      <img
        src={camper.gallery[0]?.original}
        alt={camper.name}
        className={css.image}
      />

      {/* Content */}
      <div className={css.content}>
        {/* Header */}
        <div className={css.header}>
          <h3 className={css.title}>{camper.name}</h3>
          <span className={css.price}>€{camper.price.toFixed(2)}</span>
        </div>

        {/* Rating & location */}
        <div className={css.meta}>
          <span className={css.rating}>⭐ {camper.rating.toFixed(1)}</span>
          <span className={css.location}>📍 {camper.location}</span>
        </div>

        {/* Description */}
        <p className={css.description}>{camper.description}</p>

        {/* Features */}
        <ul className={css.features}>
          <li>{camper.transmission}</li>
          <li>{camper.engine}</li>
          {camper.kitchen && <li>🍳 Kitchen</li>}
          {camper.AC && <li>❄️ AC</li>}
          {camper.bathroom && <li>🚿 Bathroom</li>}
        </ul>

        {/* Button */}
        <button className={css.button}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
