import fetchCategories from '../../api/category'
import AddAdimin from './components/AddAdmin'

const AddAdminPage = async () => {
  const cateData = await fetchCategories()
  console.log('Fetched Categories Data:', cateData)

  return (
    <section>
      <AddAdimin cateData={cateData} />
    </section>
  )
}

export default AddAdminPage
