import CamperList from "@/components/CamperList/CamperList";
import LocationDropdown from "@/components/LocationDropdown/LocationDropdown";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.catalogContainer}>
      <LocationDropdown />
      <CamperList />
    </div>
  );
};

export default CatalogPage;
