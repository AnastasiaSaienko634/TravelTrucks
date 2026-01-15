"use client";
import { fetchCamperById } from "@/lib/api/serverApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { RiStarSFill } from "react-icons/ri";
import { CiMap } from "react-icons/ci";
import css from "./CamperDetails.module.css";
import { lightningCssTransform } from "next/dist/build/swc/generated-native";

const CamperDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
    refetchOnMount: false,
  });

  console.log(camper);

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Something went wrong...</p>;
  return (
    <div className={css.camperContainer}>
      <h2 className={css.camperTitle}>{camper.name}</h2>
      {/* Rating & location */}
      <div className={css.meta}>
        <span className={css.rating}>
          <RiStarSFill className={css.iconStar} />
          {camper.rating.toFixed(1)} (Reviews)
        </span>
        <span className={css.location}>
          <CiMap className={css.mapIcon} />
          {camper.location}
        </span>
      </div>
      <p className={css.camperPrice}>€{camper.price}</p>
      <ul className={css.camperGallery}>
        {camper.gallery.map((image, index) => (
          <li key={index}>
            <img
              src={image.thumb}
              alt="Camper photo"
              className={css.camperImg}
              width={292}
              height={312}
            />
          </li>
        ))}
      </ul>
      <p className={css.camperDescription}>{camper.description}</p>
    </div>
  );
};

export default CamperDetailsClient;
