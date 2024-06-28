'use client'
import { useState, useEffect } from 'react'
import Footer from '../../_components/common/Footer'
import styles from './page.module.css'
import Header from '../../_components/common/Header'
import StarIcon from '../../_components/icon/StarIcon'

const ReviewWritepage = () => {
  const choiceNames = [
    '과일',
    '견과류',
    '채소/향신료',
    '초콜릿/캐러맬',
    '커피/차/시럽류',
    '크림/치즈/유제품',
    '기타',
  ]
  const categoryNames = [
    '스콘',
    '폰데링(츄이스티)',
    '카스테라',
    '아이스바',
    '아이스크림',
    '스무디',
    '샐러드',
    '사과파이',
  ]
  const [selectedChoices, setSelectedChoices] = useState([])
  const [iconColors, setIconColors] = useState(Array(4).fill('#CCCCCC'))
  const [displayText, setDisplayText] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [uploadedImages, setUploadedImages] = useState([])
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const [categoryInput, setCategoryInput] = useState('')
  const [filteredCategories, setFilteredCategories] = useState([])
  const [showModal, setShowModal] = useState(false)

  const textsForStars = {
    1: [
      '추천하지않아요 😟',
      '굳이드실필요는 😟',
      '저랑안맞아요 😟',
      '많이아쉬워요 😟',
      '다른거먹을걸 😟',
      '완전별로에요 😟',
    ],
    2: [
      '그냥그냥그래요 🙁',
      '다음엔다른거 🙁',
      '조금아쉬워요 🙁',
      '아는맛이에요 🙁',
      '조금별로에요 🙁',
    ],
    3: [
      '추천해줄만해요 🙂',
      '친구랑또와야지 🙂',
      '또먹을거에요 🙂',
      '만족스러워요 🙂',
      '하나더시킬까 🙂',
      '저는맛있어요 🙂',
    ],
    4: [
      '진짜완전좋아요 😍',
      '여행도갈수있음 😍',
      '최고의디저트 😍',
      '무조건여기다 😍',
      '완전맛있어요 😍',
      '나만아는맛집 😍',
    ],
  }
  const handleback = () => {
    setShowModal(false)

  }

  const handleFinish = () => {
    setShowModal(false)
  }
  const handleDeleteClick = () => {
    setShowModal(true)
  }
  const getRandomText = (starCount) => {
    const texts = textsForStars[starCount]
    return texts[Math.floor(Math.random() * texts.length)]
  }

  const handleChoiceClick = (name) => {
    if (selectedChoices.includes(name)) {
      setSelectedChoices(selectedChoices.filter((choice) => choice !== name))
    } else {
      setSelectedChoices([...selectedChoices, name])
    }
  }

  const handleStarClick = (index) => {
    const newIconColors = iconColors.map((color, i) =>
      i <= index ? '#ED9C38' : '#CCCCCC',
    )
    setIconColors(newIconColors)
    setDisplayText(getRandomText(index + 1))
  }

  const handleReviewChange = (event) => {
    const text = event.target.value
    setReviewText(text)
    setIsButtonEnabled(text.length >= 40)
  }

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files)
    setUploadedImages([...uploadedImages, ...files].slice(0, 4))
  }

  const handleImageDelete = (index) => {
    const newImages = uploadedImages.filter((_, i) => i !== index)
    setUploadedImages(newImages)
  }

  const handleCategoryInputChange = (event) => {
    const input = event.target.value;
    setCategoryInput(input);
    if (input) {
      const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const filtered = categoryNames
        .filter((category) => new RegExp(escapedInput, 'gi').test(category))
        .slice(0, 100);
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  };

  const handleCategorySelect = (category) => {
    setCategoryInput(category)
    setFilteredCategories([])
  }

  const highlightText = (text, highlight) => {
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
    const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
  
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ color: 'red' }}>
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </span>
    )
  }

  useEffect(() => {
    setIsButtonEnabled(reviewText.length >= 40)
  }, [reviewText])

  return (
    <>
      <section className="sec">
        <div className={styles.homeSec}>
          <div className={styles.header1}>
            <Header
              title="후기작성"
              showBackButton={true}
              showIcons={true}
              showMainLogo={false}
            />
          </div>
          <div className={styles.container}>
            <div className={styles.inputWrap}>
              <h2 className={styles.inputTxt}>매장명</h2>
              <input
                type="text"
                placeholder="매장명을 입력해주세요"
                className={styles.input}
              />

              <h2 className={styles.inputTxt}>메뉴명</h2>
              <input
                type="text"
                placeholder="메뉴명을 입력해주세요"
                className={styles.input}
              />

              <h2 className={styles.inputTxt}>카테고리</h2>
              <div className={styles.category}>
                <input
                  type="text"
                  placeholder="카테고리를 입력해주세요 (ex. 스콘)"
                  className={styles.input}
                  value={categoryInput}
                  onChange={handleCategoryInputChange}
                />
                {filteredCategories.length > 0 && (
      <div className={styles.dropdown}>
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className={styles.dropdownItem}
            onClick={() => handleCategorySelect(category)}
          >
            {highlightText(category, categoryInput)}
          </div>
        ))}
        <div
          className={`${styles.dropdownItem} ${styles.etc}`}
          onClick={() => handleCategorySelect('기타')}
        >
          찾는 카테고리가 없어요.
        </div>
      </div>
    )}
              </div>
            </div>
            <div className={styles.choice}>
              <h2 className={styles.choiceTxt}>재료선택</h2>
              {choiceNames.map((name, index) => (
                <div
                  key={index}
                  className={`${styles.choiceItem} ${
                    selectedChoices.includes(name) ? styles.selected : ''
                  }`}
                  onClick={() => handleChoiceClick(name)}
                >
                  {name}
                </div>
              ))}
            </div>
            <div>
              <h2 className={styles.starTxt}>점수</h2>
            </div>
            <div className={styles.star}>
              {iconColors.map((color, index) => (
                <StarIcon
                  key={index}
                  fill={color}
                  onClick={() => handleStarClick(index)}
                  className={styles.icon}
                  width={36}
                  height={36}
                />
              ))}
              {displayText && (
                <div className={styles.displayText} data-text={displayText}>
                  {displayText}
                </div>
              )}
            </div>
            <div>
              <h2 className={styles.writeTxt}>후기 작성</h2>
              <textarea
                value={reviewText}
                onChange={handleReviewChange}
                placeholder="후기를 작성해주세요"
                className={styles.textarea}
              />
              <div className={styles.charCount}>
                <p className={styles.txtLength}>
                  <b
                    className={` ${reviewText.length > 0 ? styles.redText : ''}`}
                  >
                    {reviewText.length}
                  </b>{' '}
                  / 최소 40자
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <h2 className={styles.imageTxt}>메뉴 사진</h2>
              <div className={styles.uploadSection}>
                <div className={styles.uploadedImages}>
                  {uploadedImages.map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Uploaded ${index + 1}`}
                        className={styles.uploadedImage}
                      />
                      {index === 0 && (
                        <div className={styles.representativeText}>
                          대표사진
                        </div>
                      )}
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleImageDelete(index)}
                      >
                        <img
                          src="/images/imageCancle.png"
                          alt="Delete"
                          className={styles.deleteIcon}
                        />
                      </button>
                    </div>
                  ))}
                </div>
                {uploadedImages.length < 4 && (
                  <label className={styles.uploadButton}>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className={styles.uploadInput}
                    />
                    <div className={styles.uploadContent}>
                      <img
                        src="/images/camera.png"
                        alt="Upload Icon"
                        className={styles.camera}
                      />
                      <span className={styles.imageLength}>
                        ({uploadedImages.length}/4)
                      </span>
                    </div>
                  </label>
                )}
              </div>
            </div>
            <button
              className={`${styles.clearbtn} ${!isButtonEnabled ? styles.disabled : ''}`}
              disabled={!isButtonEnabled}
              onClick={handleDeleteClick}
            >
              작성완료
            </button>
          </div>
        </div>
      </section>
      <Footer activeButton="review" />
      {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p className={styles.check}>
              작성을 완료한 후기는 수정할 수 없습니다.<br/>
              이대로 등록하시겠습니까?
              </p>
              <div className={styles.modalButtons}>
                <button
                  className={`${styles.modalButton} ${styles.confirmButton}`}
                  onClick={handleback}
                  type="button"
                >
                  수정하기
                </button>
                <button
                  className={`${styles.modalButton} ${styles.cancelButton}`}
                  onClick={handleFinish}
                  type="button"
                >
                  등록하기
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default ReviewWritepage
