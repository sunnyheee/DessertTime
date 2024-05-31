import fetchCategories from '../../api/route'
import AddAdimin from './components/AddAdmin'

const AddAdminPage = async () => {
  const cateData = await fetchCategories()

  return (
    <section>
      <AddAdimin cateData={cateData} />
    </section>
  )
}

export default AddAdminPage
