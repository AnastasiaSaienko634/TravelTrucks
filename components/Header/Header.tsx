import Link from "next/link";
import React from "react";
import css from "./Header.module.css";

const Header = () => {
  // Navigation bar
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        Travel<span className={css.logoPart}>Trucks</span>
      </Link>
      <nav aria-label="Main Navigation" className={css.navigation}>
        <ul className={css.navigationList}>
          <li>
            <Link href="/" className={css.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/catalog" className={css.navLink}>
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
