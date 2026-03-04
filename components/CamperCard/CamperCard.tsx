import { Camper } from "@/types/campers";
import css from "./CamperCard.module.css";
import Link from "next/link";
// Icons
import { RiStarSFill } from "react-icons/ri";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "@/lib/store/favoriteStore";
interface CamperCardProp {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProp) => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={css.card}>
      {/* Image */}
      <div className={css.imageContainer}>
        <img
          src={camper.gallery[0]?.original}
          alt={camper.name}
          className={css.image}
        />
      </div>

      {/* Content */}
      <div className={css.content}>
        {/* Header */}
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.priceFavoritContainer}>
            <h2 className={css.price}>€{camper.price.toFixed(2)}</h2>
            <button
              className={css.favoritebtn}
              onClick={() => toggleFavorite(camper.id)}
            >
              <FaRegHeart
                className={`${css.favoriteIcon} ${isFavorite ? css.active : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Rating & location */}
        <div className={css.meta}>
          <span className={css.rating}>
            <RiStarSFill className={css.iconStar} /> {camper.rating.toFixed(1)}
            (Reviewes)
          </span>
          <span className={css.location}>
            {" "}
            <CiMap className={css.mapIcon} /> {camper.location}
          </span>
        </div>

        {/* Description */}
        <p className={css.description}>{camper.description}</p>

        {/* Features */}
        <ul className={css.features}>
          <li className={css.itemFeatures}>
            <TbAutomaticGearbox className={css.iconFeatures} />
            {camper.transmission}
          </li>
          <li className={css.itemFeatures}>
            <FaGasPump className={css.iconFeatures} />
            {camper.engine}
          </li>
          {camper.kitchen && (
            <li className={css.itemFeatures}>
              <GrCafeteria className={css.iconFeatures} /> Kitchen
            </li>
          )}
          {camper.AC && (
            <li className={css.itemFeatures}>
              <MdAir className={css.iconFeatures} /> AC
            </li>
          )}
          {camper.bathroom && (
            <li className={css.itemFeatures}>
              <FaBath className={css.iconFeatures} /> Bathroom
            </li>
          )}
        </ul>

        {/* Button */}
        <Link href={`/catalog/filter/${camper.id}`} className={css.link}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
