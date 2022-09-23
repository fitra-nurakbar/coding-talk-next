import styles from "../styles/Footer.module.css";

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
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
