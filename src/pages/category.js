import React from "react";
import Layouts from "../components/Layouts";
import Navbar from "../components/Navbar";

export default function News() {
  return (
    <Layouts title="Category">
      <Navbar />
      <h1 className='text-center font-semibold underline pt-[100px]'>Hello world!</h1>
    </Layouts>
  );
}
