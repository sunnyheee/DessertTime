import Image from 'next/image'
import { getReviewData } from '../../../api/route'
import Footer from '../../../_components/common/Footer'
import Header from '../../../_components/common/Header'
import styles from './page.module.css'
import ItemHeartIcon from '../../../_components/icon/ItemHeartIcon'
import StarIcon from '../../../_components/icon/StarIcon'
import ImageSlide from './_components/ImageSlide'

const ReviewDetail = async ({ params }) => {
  const { id } = params
  const reviewData = await getReviewData(id)

  return (
    <>
      <Header title="상세 후기" showMainLogo={false} />
      <section className="sec">
        <article className={styles.itemBox}>
          <div className={styles.itemInfo}>
            <div className={styles.userInfo}>
              <Image
                src={`/images/${reviewData.usericon}`}
                width={34}
                height={34}
                alt="아이콘"
              />
              <div>
                <p>{reviewData.username}</p>
                <span>{reviewData.date}</span>
              </div>
            </div>
            <div className={styles.likeInfo}>
              <ItemHeartIcon stroke="#999999" />
              <span>{reviewData.like}</span>
            </div>
          </div>

          <div className={styles.itemImages}>
            <div className={styles.itemImages}>
              <ImageSlide images={reviewData.img} />
            </div>
          </div>
          <h3 className={styles.shopTitle}>
            {reviewData.shopname}
            <span className={styles.shopTitlebold}>{reviewData.kind}</span>
          </h3>
          <div className={styles.starBox}>
            {[...Array(4)].map((_, index) => (
              <StarIcon
                key={index}
                width="23"
                height="26"
                fill={index < reviewData.star ? '#FFA629' : 'lightgray'}
              />
            ))}
          </div>
          <div className={styles.itemContent}>
            <p>{reviewData.comment}</p>
          </div>

          <ul className={styles.ingredientList}>
            {reviewData.ingredient.map((ingredientItem) => (
              <li>{ingredientItem}</li>
            ))}
          </ul>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default ReviewDetail
