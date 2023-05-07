import React from "react";

function ButtomCarouselL() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="65"
      fill="none"
      viewBox="0 0 65 65"
    >
      <g filter="url(#filter0_d_351_658)">
        <circle cx="32.5" cy="32.5" r="29.5" fill="#C20114"></circle>
      </g>
      <path
        fill="#F4F1F1"
        d="M39.444 46.206a1.478 1.478 0 010 2.088 1.478 1.478 0 01-2.088 0l-14.75-14.75a1.475 1.475 0 010-2.088l14.75-14.75a1.476 1.476 0 012.088 2.088L25.735 32.5l13.709 13.706z"
      ></path>
      <defs>
        <filter
          id="filter0_d_351_658"
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
            result="effect1_dropShadow_351_658"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_351_658"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export {ButtomCarouselL};