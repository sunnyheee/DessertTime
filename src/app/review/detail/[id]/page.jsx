import Footer from '../../../_components/common/Footer'
import Header from '../../../_components/common/Header'

const ReviewDetail = ({ params }) => {
  const { id } = params

  return (
    <>
      <Header title="ReviewDetail" showMainLogo={false} />
      <section className="sec">{id}ReviewDetail</section>
      <Footer />
    </>
  )
}

export default ReviewDetail
