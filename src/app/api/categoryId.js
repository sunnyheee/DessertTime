const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

// 특정 ID에 해당하는 카테고리 가져오기
async function fetchCategoryById(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/dessert-category/session-sub-list/1`,
    )
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const result = await response.json()
    return result.data || null
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error)
    return null
  }
}

export default fetchCategoryById
