import { fetchCampers } from "@/lib/api/clientApi";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

const CamperList = async () => {
  const campers = await fetchCampers();
  return (
    <main>
      <ul className={css.camperList}>
        {campers.map((camper) => (
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
