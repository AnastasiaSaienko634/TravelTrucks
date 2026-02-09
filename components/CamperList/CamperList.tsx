"use client";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";
import { Camper } from "@/types/campers";

interface Props {
  campers: Camper[];
}

const CamperList = ({ campers }: Props) => {
  console.log(campers);
  return (
    <main>
      <ul className={css.camperList}>
        {campers.map((camper: Camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CamperList;
