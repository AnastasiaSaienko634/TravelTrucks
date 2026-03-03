"use client";
import { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";
import { Camper } from "@/types/campers";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

interface Props {
  campers: Camper[];
}

const CamperList = ({ campers }: Props) => {
  const [visiableCount, setVisiableCount] = useState(4);
  const visiableCampers = campers.slice(0, visiableCount);
  return (
    <main>
      {/* Camper List */}
      <ul className={css.camperList}>
        {visiableCampers.map((camper: Camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {/* Load More button */}
      {visiableCount < campers.length ? (
        <div className={css.visiableBtnLoadMr}>
          <ScrollToTopButton />
          <button
            className={css.loadMoreBtn}
            onClick={() => setVisiableCount((prev) => prev + 4)}
          >
            Load more
          </button>
        </div>
      ) : (
        <div className={css.scrollTopBtnConatiner}>
          <h3 className={css.scrollBtnTitle}>Nothing more was find...</h3>
          <ScrollToTopButton />
        </div>
      )}
    </main>
  );
};

export default CamperList;
