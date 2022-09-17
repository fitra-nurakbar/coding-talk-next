import React from "react";
import Layouts from "../components/layouts";
import Navbar from "../components/navbar";

export default function News() {
  return (
    <Layouts title="Category">
      <Navbar />
      <h1 className='text-center font-semibold underline'>Hello world!</h1>
    </Layouts>
  );
}
