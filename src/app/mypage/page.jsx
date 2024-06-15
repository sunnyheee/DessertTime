import React from 'react'
import Footer from '../_components/common/Footer'
import Header from '../_components/common/Header'

const Mypage = () => {
  return (
    <>
      <Header title="Mypage" showMainLogo={false} />
      <section className="sec">
        <div>Mypage</div>
      </section>
      <Footer activeButton="mypage" />
    </>
  )
}

export default Mypage
