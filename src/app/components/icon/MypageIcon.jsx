import React from 'react'

const MypageIcon = ({ stroke }) => {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.29883 18C3.63462 15.5226 6.80584 14 10.2988 14C13.7918 14 16.963 15.5226 19.2988 18M14.7988 5.5C14.7988 7.98528 12.7841 10 10.2988 10C7.81355 10 5.79883 7.98528 5.79883 5.5C5.79883 3.01472 7.81355 1 10.2988 1C12.7841 1 14.7988 3.01472 14.7988 5.5Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MypageIcon
