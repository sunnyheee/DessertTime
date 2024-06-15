'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../_components/common/Header'
import Footer from '../../_components/common/Footer'
import data from '../../data/data.json'

const CategorySlugPage = ({ params }) => {
  const { slug } = params
  const router = useRouter()

  if (!slug) {
    return <div>Loading...</div>
  }
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
      <Header title={categoryName} showMainLogo={false} />
      <section className="sec">{categoryName} CategorySlugPage</section>
      <Footer />
    </>
  )
}

export default CategorySlugPage
