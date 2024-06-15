import React from 'react'
import Footer from '../_components/common/Footer'
import Header from '../_components/common/Header'

const Heartpage = () => {
  return (
    <>
      <Header title="Heartpage" showMainLogo={false} />
      <section className="sec">
        <div>Heartpage</div>
      </section>
      <Footer activeButton="heart" />
    </>
  )
}

export default Heartpage
