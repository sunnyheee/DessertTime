// TODO: 더미데이터 삭제
import path from 'path'
import { promises as fs } from 'fs'

export async function getDummyData() {
  const jsonDirectory = path.join(process.cwd(), 'src/app/data')
  const fileContents = await fs.readFile(`${jsonDirectory}/data.json`, 'utf8')
  return JSON.parse(fileContents)
}

export async function getSlugDummyData(slug) {
  const data = await getDummyData()

  let foundCategory = data.categories.find(
    (categoryData) => categoryData.slug === slug,
  )
  if (foundCategory) return foundCategory

  data.categories.some((cat) => {
    foundCategory = cat.subcategories.find((subcat) => subcat.slug === slug)
    return foundCategory
  })

  return foundCategory || null
}
export async function getReviewData(id) {
  const data = await getDummyData()
  let foundReview = null

  data.categories.some((category) => {
    return category.subcategories.some((subcategory) => {
      if (subcategory.items) {
        foundReview = subcategory.items.find(
          (item) => item.id === parseInt(id, 10),
        )
        return foundReview
      }
      return false
    })
  })

  return foundReview
}

export default async function handler(req, res) {
  const query = req?.query || {}
  const { slug, id } = query

  try {
    if (slug) {
      const categoryData = await getSlugDummyData(slug)
      if (categoryData) {
        res?.status(200).json(categoryData)
      } else {
        res?.status(404).json({ error: 'Category not found' })
      }
    } else if (id) {
      const reviewData = await getReviewData(id)
      if (reviewData) {
        res?.status(200).json(reviewData)
      } else {
        res?.status(404).json({ error: 'Review not found' })
      }
    } else {
      const data = await getDummyData()
      res?.status(200).json(data)
    }
  } catch (error) {
    res?.status(500).json({ error: 'Failed to read data' })
  }
}
