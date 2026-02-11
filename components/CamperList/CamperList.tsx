"use client";
import { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";
import { Camper } from "@/types/campers";

interface Props {
  campers: Camper[];
}

const CamperList = ({ campers }: Props) => {
  console.log(campers);
  const [visiableCount, setVisiableCount] = useState(4);
  const visiableCampers = campers.slice(0, visiableCount);
  return (
    <main>
      <ul className={css.camperList}>
        {visiableCampers.map((camper: Camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {visiableCount < campers.length && (
        <button
          className={css.loadMoreBtn}
          onClick={() => setVisiableCount((prev) => prev + 4)}
        >
          Load more
        </button>
      )}
    </main>
  );
};

export default CamperList;
