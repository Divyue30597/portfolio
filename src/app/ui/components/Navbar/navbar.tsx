"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/app/ui/components/Navbar/navbar.module.scss";

export default function Navbar() {
  const routes = [
    {
      id: 1,
      route: "/",
      routeName: "Projects",
    },
    {
      id: 2,
      route: "/experience",
      routeName: "Experience",
    },
    {
      id: 3,
      route: "/resume",
      routeName: "Resume",
    },
    {
      id: 4,
      route: "/articles",
      routeName: "Articles",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <p>
        <strong>DS.</strong>
      </p>

      <ul className={styles.nav}>
        {routes.map((route) => {
          return (
            <li className={styles.li} key={route.id}>
              <Link
                className={pathname === route.route ? styles.active : ""}
                href={route.route}
              >
                {route.routeName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
