"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './agree.module.css';

export default function Home() {
  const [allChecked, setAllChecked] = useState(false);
  const [firstChecked, setFirstChecked] = useState(false);
  const [twiceChecked, setTwiceChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  
  useEffect(() => {
    setIsNextEnabled(firstChecked && twiceChecked);
  }, [firstChecked, twiceChecked]);

  // 전체동의 체크박스 상태 변경 
  const handleAllCheckboxChange = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setFirstChecked(newCheckedState);
    setTwiceChecked(newCheckedState);
    setThirdChecked(newCheckedState);
  };

  // 다음 버튼 클릭 시 필수 항목 체크 여부 확인
  const handleNextButtonClick = () => {
    if (!firstChecked || !twiceChecked) {
      alert('(필수) 항목에 동의해주세요.');
    } else {
    
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <Image src='/images/cake.png' alt="로고" width={63} height={64} className={styles.logo} />
        <p className={styles.headtxt}>디저트타임<b className={styles.subtxt}>에<br/>오신걸환영합니다!</b></p>
        
        <div className={`${styles.check} ${styles.firstCheck}`}>
          <input
            type='checkbox'
            id='all'
            className={styles.checkbox}
            checked={allChecked}
            onChange={handleAllCheckboxChange}
          />
          <label htmlFor='all' className={`${styles.agree} ${styles.allagree}`}>전체동의 (선택 동의 포함)</label>
        </div>

        <div className={styles.check}>
          <input
            type='checkbox'
            id='first'
            className={styles.checkbox}
            checked={firstChecked}
            onChange={(e) => setFirstChecked(e.target.checked)}
          />
          <label htmlFor='first' className={styles.agree}>(필수) 홈페이지 이용약관</label>
        </div>

        <div className={styles.check}>
          <input
            type='checkbox'
            id='twice'
            className={styles.checkbox}
            checked={twiceChecked}
            onChange={(e) => setTwiceChecked(e.target.checked)}
          />
          <label htmlFor='twice' className={styles.agree}>(필수) 개인정보 제공 활용</label>
        </div>

        <div className={styles.check}>
          <input
            type='checkbox'
            id='third'
            className={styles.checkbox}
            checked={thirdChecked}
            onChange={(e) => setThirdChecked(e.target.checked)}
          />
          <label htmlFor='third' className={styles.agree}>(선택) 마케팅 및 광고 활용</label>
        </div>
        <button
          className={`${styles.nextbtn} ${isNextEnabled ? styles.nextbtnActive : ''}`}
          onClick={handleNextButtonClick}
        >
          다음
        </button>
      </div>
    </main>
  );
}
