import React from 'react'
import styles from './ReviewCard.module.css'
import ItemHeartIcon from '../../../../_components/icon/ItemHeartIcon'
import ImageSlide from './ImageSlide'
import StarIcon from '../../../../_components/icon/StarIcon'

const MyReviewCard = ({ data }) => {
  return (
    <>
      <article className={styles.itemBox}>
        <div className={styles.itemInfo}>
          <div>
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
        <div className={styles.itemContent}>
          <p>{data.comment}</p>
        </div>
        <ul className={styles.ingredientList}>
          {data.ingredient.map((ingredientItem) => (
            <li>{ingredientItem}</li>
          ))}
        </ul>
      </article>
      <div className={styles.dataInfo}>
        <span>{data.date}</span>
      </div>
    </>
  )
}

export default MyReviewCard
