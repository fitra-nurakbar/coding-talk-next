import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import styles from "../styles/Slider.module.css"

export default function Slider() {
  return (
     <Swiper
     pagination={{
       dynamicBullets: true,
     }}
     modules={[Pagination]}
     className='mySwiper'>
     <SwiperSlide>
       <section className={styles.slider}>
         <h1 className='text-center'>Home page 1</h1>
       </section>
     </SwiperSlide>
     <SwiperSlide>
       <section className={styles.slider}>
         <h1 className='text-center'>Home page 2</h1>
       </section>
     </SwiperSlide>
     <SwiperSlide>
       <section className={styles.slider}>
         <h1 className='text-center'>Home page 3</h1>
       </section>
     </SwiperSlide>
   </Swiper>
  )
}
