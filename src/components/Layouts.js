import Head from "next/head";
import React from "react";
import styles from "../styles/Layouts.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layouts({ title, children }) {
  const titlePage = `${title} | Portal Next`;

  return (
    <>
      <Head>
        
        <title>{titlePage}</title>
      </Head>
      <Navbar />
      <main className={styles.wrap}>{children}</main>
      <Footer />
    </>
  );
}
