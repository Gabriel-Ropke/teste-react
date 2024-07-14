import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export function Footer() {
  let iconSize = 25;
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialMediaList}>
        <li>
          <Link to="/" className={styles.facebook}>
            <FaFacebook size={iconSize} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.youtube}>
            <FaYoutube size={iconSize} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.discord}>
            <FaDiscord size={iconSize} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.instagram}>
            <FaInstagram size={iconSize} />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.twitter}>
            <FaTwitter size={iconSize} />
          </Link>
        </li>
      </ul>
      <ul className={styles.linksOne}>
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/">Story</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
      </ul>
      <Link className={styles.name}>Froga</Link>
      <ul className={styles.linksTwo}>
        <li>
          <Link to="/">Careers</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
}
