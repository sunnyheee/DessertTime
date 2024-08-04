import { getReviewData } from '../../../api/route'
import Footer from '../../../_components/common/Footer'
import Header from '../../../_components/common/Header'
import ReviewCard from './_components/ReviewCard'
import MyReviewCard from './_components/MyReviewCard'

const ReviewDetail = async ({ params }) => {
  const { id } = params
  const reviewData = await getReviewData(id)

  return (
    <>
      <Header title="상세 후기" showMainLogo={false} />
      <section className="sec">
        {reviewData.type === 'myReview' ? (
          <MyReviewCard data={reviewData} />
        ) : (
          <ReviewCard data={reviewData} />
        )}
      </section>
      <Footer />
    </>
  )
}

export default ReviewDetail
