"use client"
import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [activeButton, setActiveButton] = useState('홈'); 

  const handleButtonClick = (label, name) => {
    setActiveButton(name);
    switch (label) {
      case 'home':
        window.location.href = '/';
        break;
      case 'category':
        window.location.href = '/category';
        break;
      case 'review':
        window.location.href = '/review';
        break;
      case 'heart':
        window.location.href = '/heart';
        break;
      case 'mypage':
        window.location.href = '/mypage';
        break;
      default:
        break;
    }
  };

  const menuItems = [
    { src: '/images/home.png', label: 'home', name: '홈' },
    { src: '/images/category.png', label: 'category', name: '카테고리' },
    { src: '/images/review.png', label: 'review', name: '후기작성' },
    { src: '/images/heart.png', label: 'heart', name: '좋아요' },
    { src: '/images/mypage.png', label: 'mypage', name: 'My' },
  ];

  return (
    <footer className={styles.footer}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.menuItem} ${activeButton === item.name ? styles.active : ''}`}
          onClick={() => handleButtonClick(item.label, item.name)}
        >
          <img
            src={item.src}
            alt={item.label}
            className={`${styles.icon} ${item.label === 'category' ? styles.categoryIcon : ''}`}
          />
          <div className={styles.name}>{item.name}</div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
