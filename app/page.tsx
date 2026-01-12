import Link from "next/link";
import css from "./page.module.css";

const Home = () => {
  return (
    <main className={css.main}>
      <div className={css.heroContainer}></div>
      <h1 className={css.heroTitle}>Campers of your dreams</h1>
      <p className={css.heroDiscription}>
        You can find everything you want in our catalog
      </p>
      <Link href="/catalog" className={css.heroButton}>
        View Now
      </Link>
    </main>
  );
};

export default Home;
