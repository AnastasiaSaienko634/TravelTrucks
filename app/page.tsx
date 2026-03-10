import Link from "next/link";
import css from "./page.module.css";

// Home Page
const Home = () => {
  return (
    <main className={css.main}>
      <div className={`${css.heroContainer} ${css.fadeUp}`}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroDiscription}>
          You can find everything you want in our catalog
        </p>
        {/* Link to Catolog with Trucks */}
        <Link href="/catalog" className={css.heroButton}>
          View Now
        </Link>
      </div>
    </main>
  );
};

export default Home;
