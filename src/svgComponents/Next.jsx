import * as React from "react"
const Next = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={119}
    height={154}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <g filter="url(#b)">
        <circle cx={59.5} cy={58.5} r={55.5} fill="#fff" />
      </g>
      <path
        fill="#C20114"
        d="M73.544 59.981 52.606 80.92a2.096 2.096 0 0 1-2.962-2.963L69.103 58.5l-19.46-19.456a2.095 2.095 0 0 1 2.963-2.963L73.544 57.02a2.094 2.094 0 0 1 0 2.962Z"
      />
    </g>
    <g fill="#C20114" clipPath="url(#c)">
      <path d="M59.5 135.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75ZM70.125 135.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75ZM48.875 135.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
    </g>
    <defs>
      <filter
        id="a"
        width={119}
        height={119}
        x={0}
        y={3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_358_2120"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_358_2120"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={117}
        height={117}
        x={1}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_358_2120"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_358_2120"
          result="shape"
        />
      </filter>
      <clipPath id="c">
        <path fill="#fff" d="M39.5 114h40v40h-40z" />
      </clipPath>
    </defs>
  </svg>
)
export {Next}
