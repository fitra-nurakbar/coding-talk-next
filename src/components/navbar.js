import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <h1>News</h1>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/category'>Category</Link>
        </nav>
      </header>
    </div>
  );
}
