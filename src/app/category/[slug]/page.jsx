import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../_components/common/Header'
import Footer from '../../_components/common/Footer'
import styles from './page.module.css'
import ItemHeartIcon from '../../_components/icon/ItemHeartIcon'
import StarIcon from '../../_components/icon/StarIcon'
import { getSlugDummyData } from '../../api/route'

const CategorySlugPage = async ({ params }) => {
  const { slug } = params
  const categoryData = await getSlugDummyData(slug)

  if (!categoryData) {
    return <div>Category not found</div>
  }

  const { name: categoryName, items: subcategoryItems } = categoryData

  return (
    <>
      <Header title={categoryName} showMainLogo={false} />
      <section className="sec bg">
        <div className={styles.content}>
          <h3 className={styles.title}>{categoryName} 후기</h3>
          <article className={styles.itemBox}>
            {subcategoryItems?.length ? (
              subcategoryItems?.map((item) => (
                <Link
                  href={`/review/detail/${item.id}`}
                  key={item.id}
                  className={styles.item}
                >
                  <div className={styles.itemInfo}>
                    <div className={styles.userInfo}>
                      <Image
                        src={`/images/${item.usericon}`}
                        width={34}
                        height={34}
                        alt="아이콘"
                      />
                      <div>
                        <p>{item.username}</p>
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <div className={styles.likeInfo}>
                      <ItemHeartIcon stroke="#999999" />
                      <span>{item.like}</span>
                    </div>
                  </div>
                  <h3 className={styles.shopTitle}>
                    {item.shopname}
                    <span className={styles.shopTitlebold}>{item.kind}</span>
                  </h3>
                  <div className={styles.starBox}>
                    {[...Array(4)].map((_, index) => (
                      <StarIcon
                        key={index}
                        width="23"
                        height="26"
                        fill={index < item.star ? '#FFA629' : 'lightgray'}
                      />
                    ))}
                  </div>
                  <div className={styles.itemImages}>
                    {item.img.map((img, index) => (
                      <div className={styles.itemImagesBox}>
                        <Image
                          src={`/images/${img}`}
                          width={79}
                          height={79}
                          alt={index}
                        />
                      </div>
                    ))}
                  </div>
                  <div className={styles.itemContent}>
                    <p>{item.comment}</p>
                  </div>

                  <ul className={styles.ingredientList}>
                    {item.ingredient.map((ingredientItem, i) => (
                      <li key={i}>{ingredientItem}</li>
                    ))}
                  </ul>
                </Link>
              ))
            ) : (
              <div className={styles.noReview}>
                {categoryName} 후기가 없습니다.
              </div>
            )}
          </article>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CategorySlugPage
