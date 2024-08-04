const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

// 카테고리 리스트 All
async function fetchCategories() {
  try {
    const response = await fetch(`${BASE_URL}/dessert-category/all-list`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const result = await response.json()
    return result.data || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export default fetchCategories
