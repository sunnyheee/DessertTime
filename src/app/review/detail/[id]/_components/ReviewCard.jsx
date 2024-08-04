import Image from 'next/image'
import React from 'react'
import styles from './ReviewCard.module.css'
import ItemHeartIcon from '../../../../_components/icon/ItemHeartIcon'
import ImageSlide from './ImageSlide'
import StarIcon from '../../../../_components/icon/StarIcon'

const ReviewCard = ({ data }) => {
  return (
    <article className={styles.itemBox}>
      <div className={styles.itemInfo}>
        <div className={styles.userInfo}>
          <Image
            src={`/images/${data.usericon}`}
            width={34}
            height={34}
            alt="아이콘"
          />
          <div>
            <p>{data.username}</p>
            <span>{data.date}</span>
          </div>
        </div>
        <div className={styles.likeInfo}>
          <ItemHeartIcon stroke="#999999" />
          <span>{data.like}</span>
        </div>
      </div>

      <div className={styles.itemImages}>
        <div className={styles.itemImages}>
          <ImageSlide images={data.img} />
        </div>
      </div>
      <h3 className={styles.shopTitle}>
        {data.shopname}
        <span className={styles.shopTitlebold}>{data.kind}</span>
      </h3>
      <div className={styles.starBox}>
        {[...Array(4)].map((_, index) => (
          <StarIcon
            key={index}
            width="23"
            height="26"
            fill={index < data.star ? '#FFA629' : 'lightgray'}
          />
        ))}
      </div>
      <div className={styles.itemContent}>
        <p>{data.comment}</p>
      </div>

      <ul className={styles.ingredientList}>
        {data.ingredient.map((ingredientItem) => (
          <li>{ingredientItem}</li>
        ))}
      </ul>
    </article>
  )
}

export default ReviewCard
