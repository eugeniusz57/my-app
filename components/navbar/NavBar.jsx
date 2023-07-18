import Link from "next/link";

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
      <nav>
        <Link href="/">MyApp</Link>
        <ul>
          {navbarLinks.map(({ id, title, url }) => (
            <li key={id}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
