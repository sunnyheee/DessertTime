import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import HomeIcon from '../icon/HomeIcon'
import CategoryIcon from '../icon/CategoryIcon'
import ReviewIcon from '../icon/ReviewIcon'
import HeartIcon from '../icon/HeartIcon'
import MypageIcon from '../icon/MypageIcon'

const Footer = ({ activeButton }) => {
  const menuItems = [
    { component: HomeIcon, label: 'home', name: '홈' },
    { component: CategoryIcon, label: 'category', name: '카테고리' },
    { component: ReviewIcon, label: 'review', name: '후기작성' },
    { component: HeartIcon, label: 'heart', name: '좋아요' },
    { component: MypageIcon, label: 'mypage', name: 'My' },
  ]

  return (
    <footer className={styles.footer}>
      {menuItems.map((item) => (
        <Link
          key={item.label}
          className={`${styles.menuItem} ${activeButton === item.label ? styles.active : ''}`}
          href={`/${item.label}`}
        >
          <item.component
            stroke={activeButton === item.label ? '#EF4444' : '#9A9C9F'}
          />
          <div className={styles.name}>{item.name}</div>
        </Link>
      ))}
    </footer>
  )
}

export default Footer
