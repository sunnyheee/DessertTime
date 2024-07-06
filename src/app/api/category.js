const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/dessert-category/list`)
  const result = await response.json()
  return result.firstCategoryList || []
}

export default fetchCategories
