'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../_components/common/Header'
import styles from './page.module.css'

const NoticeEvent = () => {
  const notice = [
    { title: '공지사항 제목 1', date: '2024.06.19' },
    { title: '공지사항 제목 2', date: '2024.06.20' },
  ]

  const event = [
    { title: '이벤트 제목 1', date: '2024.07.01' },
    { title: '이벤트 제목 2', date: '2024.07.02' },
  ]

  const sortByDate = (data) => {
    return data.sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  const router = useRouter()
  const queryParams = new URLSearchParams(window.location.search)
  const initialTab = queryParams.get('tab') === 'event' ? 'event' : 'notice'

  const [activeTab, setActiveTab] = useState(initialTab)
  const [contents, setContents] = useState(
    sortByDate(initialTab === 'notice' ? [...notice] : [...event]),
  )

  useEffect(() => {
    const tab = queryParams.get('tab') === 'event' ? 'event' : 'notice'
    setActiveTab(tab)
    setContents(sortByDate(tab === 'notice' ? [...notice] : [...event]))
  }, [queryParams])

  const handleTabClick = (tab) => {
    router.push(`/noticeEvent?tab=${tab}`)
    setActiveTab(tab)
    setContents(sortByDate(tab === 'notice' ? [...notice] : [...event]))
  }

  return (
    <section className="sec">
      <div className={styles.wrap}>
        <Header
          title="공지사항/이벤트"
          showMainLogo={false}
          showIcons={false}
        />
        <div className={styles.container}>
          <div
            className={`${styles.notice} ${activeTab === 'notice' ? styles.active : ''}`}
            onClick={() => handleTabClick('notice')}
          >
            공지사항
          </div>
          <div
            className={`${styles.event} ${activeTab === 'event' ? styles.active : ''}`}
            onClick={() => handleTabClick('event')}
          >
            이벤트
          </div>
          {contents.map((content, index) => (
            <div key={index} className={styles.content}>
              <h2 className={styles.title}>{content.title}</h2>
              <p className={styles.date}>{content.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NoticeEvent
