/* eslint-disable import/prefer-default-export */
const BASE_URL = 'http://144.24.64.187:3000'

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/ctg_1`)
  const result = await response.json()
  return result.data || []
}
