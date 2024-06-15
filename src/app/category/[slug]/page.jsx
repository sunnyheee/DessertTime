'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import data from '../../data/data.json'

const CategorySlugPage = () => {
  const router = useRouter()
  const { slug } = router.query

  if (!slug) {
    return <div>Loading...</div>
  }

  // Find the category and subcategory based on the slug
  let categoryName = 'Category'
  data.categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      if (subcategory.slug === slug) {
        categoryName = subcategory.name
      }
    })
  })

  return (
    <>
      <Header title={categoryName} />
      <section className="sec">{categoryName} CategorySlugPage</section>
      <Footer />
    </>
  )
}

export default CategorySlugPage
