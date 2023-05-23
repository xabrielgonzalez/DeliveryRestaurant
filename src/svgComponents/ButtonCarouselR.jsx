import React from "react";

function ButtonCarouselR() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="65"
      fill="none"
      viewBox="0 0 65 65"
    >
      <g filter="url(#filter0_d_928_533)">
        <circle cx="32.5" cy="32.5" r="29.5" fill="#C20114"></circle>
        <circle cx="32.5" cy="32.5" r="29" stroke="#C20114"></circle>
      </g>
      <path
        fill="#F4F1F1"
        d="M42.394 33.544l-14.75 14.75a1.476 1.476 0 01-2.088-2.088L39.265 32.5 25.556 18.794a1.476 1.476 0 012.087-2.088l14.75 14.75a1.474 1.474 0 010 2.088z"
      ></path>
      <defs>
        <filter
          id="filter0_d_928_533"
          width="65"
          height="65"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_928_533"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_928_533"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export {ButtonCarouselR};