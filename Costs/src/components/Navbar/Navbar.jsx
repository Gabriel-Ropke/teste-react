import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../../layout/Container";
import styles from "./Navbar.module.css";

export function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link
            to="/"
            className={activeLink === "/" ? styles.selected : ""}
            onClick={() => setActiveLink("/")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/company"
            className={activeLink === "/company" ? styles.selected : ""}
            onClick={() => setActiveLink("/company")}
          >
            Company
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === "/contact" ? styles.selected : ""}
            onClick={() => setActiveLink("/contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className={activeLink === "/project" ? styles.selected : ""}
            onClick={() => setActiveLink("/project")}
          >
            Project
          </Link>
        </li>
      </ul>
    </nav>
  );
}
