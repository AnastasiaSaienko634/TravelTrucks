import { fetchCampers } from "@/lib/api/serverApi";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";
import { Camper } from "@/types/campers";

const CamperList = async () => {
  const campers = await fetchCampers();
  return (
    <main>
      <ul className={css.camperList}>
        {campers.map((camper: Camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      ;
    </main>
  );
};

export default CamperList;
