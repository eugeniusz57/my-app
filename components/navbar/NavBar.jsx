"use client";
import Link from "next/link";
import styles from "./page.module.css";

const navbarLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <header>
      <nav className={styles.container}>
        <Link href="/" className={styles.logo}>
          MyApp
        </Link>
        <ul className={styles.links}>
          {navbarLinks.map(({ id, title, url }) => (
            <li key={id}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
          <button className={styles.loguot}>Loguot</button>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
