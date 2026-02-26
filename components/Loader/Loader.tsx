import type { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "90px auto",
  borderColor: "red",
};

// Loader
const Loader = () => {
  return (
    <ClipLoader
      color="#ffffff"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
