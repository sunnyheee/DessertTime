'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/common/Footer'

export default function Home() {
  const slides = ['/images/image1.png', '/images/image2.png']

  const reviews = [
    {
      name: '청포도 케이크 후기',
      images: [
        '/images/image6.png',
        '/images/image7.png',
        '/images/image12.png',
        '/images/image7.png',
      ],
    },
    {
      name: '망고 빙수 후기',
      images: [
        '/images/image9.png',
        '/images/image10.png',
        '/images/image8.png',
        '/images/image10.png',
      ],
    },
    {
      name: '망고 빙수 후기',
      images: [
        '/images/image9.png',
        '/images/image10.png',
        '/images/image8.png',
        '/images/image10.png',
      ],
    },
    {
      name: '망고 빙수 후기',
      images: [
        '/images/image9.png',
        '/images/image10.png',
        '/images/image8.png',
        '/images/image10.png',
      ],
    },
  ]

  return (
    <>
      <section className={styles.homeSec}>
        <div className={styles.header}>
          <Image
            src="/images/dessertTime.png"
            alt="메인로고"
            width={216}
            height={29}
            style={{ cursor: 'pointer' }}
          />
          <div className={styles.icon}>
            <Image
              src="/images/search.png"
              alt="메인서치"
              width={18}
              height={18}
            />
            <Image
              src="/images/bell.png"
              alt="메인알림"
              width={24}
              height={24}
            />
          </div>
        </div>
        <Swiper
          spaceBetween={8}
          slidesPerView="auto"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className={styles.swiperContainer}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                width={348}
                height={214}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewSection}>
            <h2 className={styles.reviewtxt}>{review.name}</h2>
            <div className={styles.swiperContainer2}>
              <Swiper
                spaceBetween={8}
                slidesPerView="auto"
                loop={true}
                className={styles.slidewrap}
              >
                {review.images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex} className={styles.swiperSlide2}>
                    <Image
                      src={image}
                      alt={`Review Image ${index + 1}`}
                      width={106}
                      height={140}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  )
}
