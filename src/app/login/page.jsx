import styles from './page.module.css'
import AddAdimin from './components/AddAdimin'

import { fetchCategories } from '../api/route'

const Loginpage = async () => {
  const data = await fetchCategories()

  return (
    <main className="main">
      <AddAdimin data={data} />
    </main>
  )
}

export default Loginpage
