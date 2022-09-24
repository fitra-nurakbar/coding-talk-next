import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerA}>
        <h1>FOOTER</h1>
      </div>
      <div className={styles.footerB}>
        <div className={styles.wrap}>
          <div className={styles.detail}>
            <a href=''>learning@next.js</a>
            <p>Copyright 2022</p>
          </div>
          <div className={styles.icons}>
            <Link href="https://www.instagram.com/fit.tra_/">
              <a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/fitra-nurakbar-5967a8230">
              <a target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </Link>
            <Link href="https://github.com/fitra-nurakbar">
              <a target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
