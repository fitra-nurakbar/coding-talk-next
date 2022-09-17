import Head from "next/head";
import React from "react";

export default function Layouts({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} | Portal Next</title>
      </Head>
      {children}
    </>
  );
}
