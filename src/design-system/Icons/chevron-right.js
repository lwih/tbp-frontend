import React from 'react'

export const ChevronRightIcon = ({ color }) => (
  <div
    style={{
      cursor: 'pointer',
      height: '100%',
    }}
  >
    <svg
      height="22"
      viewBox="0 0 10 16"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="m-7-4h24v24h-24z" fill="none" />
        <path
          d="m2.485.707 7.071 7.071-7.07 7.071a1 1 0 1 1 -1.415-1.414l5.657-5.657-5.658-5.657a1 1 0 0 1 1.415-1.414z"
          fill={color}
        />
      </g>
    </svg>
  </div>
)

export default ChevronRightIcon
