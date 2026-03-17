"use client";
// Styles
import css from "./CamperList.module.css";
// Hook
import { useState } from "react";
// Types
import { Camper } from "@/types/campers";
// Icons
import { CiNoWaitingSign } from "react-icons/ci";
// Components
import CamperCard from "../CamperCard/CamperCard";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

interface Props {
  campers: Camper[];
}

const CamperList = ({ campers }: Props) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleCampers = campers.slice(0, visibleCount);

  return (
    <main>
      {/* Camper List */}
      {visibleCampers.length > 0 ? (
        <>
          <ul className={css.camperList}>
            {visibleCampers.map((camper: Camper) => (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>

          {/* Load More / Scroll Button */}
          {visibleCount < campers.length ? (
            <div className={css.visibleBtnLoadMore}>
              <ScrollToTopButton />
              <button
                className={css.loadMoreBtn}
                onClick={() => setVisibleCount((prev) => prev + 4)}
              >
                Load more
              </button>
            </div>
          ) : (
            <div className={css.scrollTopBtnContainer}>
              <h3 className={css.scrollBtnTitle}>Nothing more found...</h3>
              <ScrollToTopButton />
            </div>
          )}
        </>
      ) : (
        // Nothing Found
        <div className={css.nthFindContainer}>
          <h1 className={css.nthTitle}>No trucks was found!</h1>
          <p>Try another one!</p>
          <CiNoWaitingSign className={css.iconNth} />
        </div>
      )}
    </main>
  );
};

export default CamperList;
