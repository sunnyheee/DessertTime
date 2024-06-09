const BASE_URL = 'http://144.24.64.187:3000'

export default async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/ctg_1`)
  const result = await response.json()
  console.log(result, 're')
  return result.data || []
}
