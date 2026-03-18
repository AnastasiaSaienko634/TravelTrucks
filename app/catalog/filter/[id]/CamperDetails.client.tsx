"use client";

import css from "./CamperDetails.module.css";
// Hooks
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
// React hot Toaster
import { Toaster } from "react-hot-toast";
// API
import { fetchCamperById } from "@/lib/api/serverApi";
// Components
import BookingForm from "@/components/BookingForm/BookingForm";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Reviews/Reviews";
// Icons
import { RiStarSFill } from "react-icons/ri";
import { CiMap } from "react-icons/ci";
import Loader from "@/components/Loader/Loader";
import PhotoPreview from "@/components/PhotoPreview/PhotoPreview";

const CamperDetailsClient = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features",
  );
  const { id } = useParams<{ id: string }>();

  console.log(selectedPhoto);
  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;

  if (error || !camper) return <p>Something went wrong...</p>;
  return (
    <div className={css.container}>
      <div className={css.camperContainer}>
        {/* Name Trucks */}
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
        {/* Price | Gallery Trucks */}
        <p className={css.camperPrice}>€{camper.price}</p>

        <ul className={css.camperGallery}>
          {camper.gallery
            .filter((image) => image.thumb)
            .map((image, index) => (
              <li key={index}>
                {/* Photos */}
                <img
                  src={image.thumb}
                  alt="Camper photo"
                  className={css.camperImg}
                  width={292}
                  height={312}
                  onClick={() => setSelectedPhoto(image.thumb || null)}
                />
              </li>
            ))}
        </ul>

        {/* Camper Truck description */}
        <p className={css.camperDescription}>{camper.description}</p>

        {/* Tab Features and Reviews */}
        <div className={css.buttons}>
          <button
            onClick={() => setActiveTab("features")}
            className={`${css.tab} ${activeTab === "features" ? css.active : ""}`}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`${css.tab} ${activeTab === "reviews" ? css.active : ""}`}
          >
            Reviews
          </button>
        </div>

        {/* Tab with Features and Reviews */}
        <div className={css.tabs}>
          <div className={css.leftPart}>
            {activeTab === "features" && <Features camper={camper} />}{" "}
            {activeTab === "reviews" && <Reviews camper={camper} />}
          </div>

          {/* Booking Form */}
          <div className={css.bookingForm}>
            <BookingForm />
          </div>
        </div>
        {/* React Toaster Component */}
        <Toaster />

        {/* Selected Photo with Modal */}
        {selectedPhoto && (
          <PhotoPreview
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CamperDetailsClient;
