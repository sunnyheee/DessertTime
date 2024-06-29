'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import styles from './ImageSlide.module.css'

const ImageSlide = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className={styles.slidewrap}
    >
      {images.map((slide, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <Image
            src={`/images/${slide}`}
            alt={`Slide ${index + 1}`}
            width={480}
            height={241}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSlide
