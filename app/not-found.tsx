import type { Metadata } from "next";
import css from "../app/not-found.module.css";
import Link from "next/link";

// Metadata
export const metadata: Metadata = {
  title: "Page was not found.",
  description: "The page you were looking for was not found...",
  openGraph: {
    title: "Page was not found.",
    description: "The page you were looking for was not found...",
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

// NotFound Page
const NotFound = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1>404 - Page was not found.</h1>
      <p>The page you were looking for was not found...</p>
      {/* Link to Home Page */}
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;
