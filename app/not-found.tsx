import type { Metadata } from "next";
import css from "../app/not-found.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cторінку не було знайдено",
  description: "Сторінку яку ви шукали не було знайдено...",
  openGraph: {
    title: "Cторінку не було знайдено",
    description: "Сторінку яку ви шукали не було знайдено...",
    url: "/not-found",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1>404 - Сторінку не було знайдено</h1>
      <p>Сторінку, яку ви шукали, не знайдено.</p>
      <Link href="/">Повернутися на головну сторінку</Link>
    </div>
  );
};

export default NotFound;
