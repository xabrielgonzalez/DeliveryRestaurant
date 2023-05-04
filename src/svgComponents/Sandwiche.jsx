import React from "react";

function Sandwiche() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="158"
      height="211"
      fill="none"
      viewBox="0 0 158 161"
    >
      <g filter="url(#filter0_d_319_834)">
        <g filter="url(#filter1_d_319_834)">
          <circle cx="79" cy="78" r="75" fill="#fff"></circle>
        </g>
        <path fill="url(#pattern49)" d="M32.846 31.846H124V123H32.846z"></path>
      </g>
      <defs>
        <filter
          id="filter0_d_319_834"
          width="158"
          height="158"
          x="0"
          y="3"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_319_834"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_834"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_319_834"
          width="156"
          height="156"
          x="1"
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
            result="effect1_dropShadow_319_834"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_834"
            result="shape"
          ></feBlend>
        </filter>
        <pattern
          id="pattern49"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_319_834"></use>
        </pattern>
        <image
          id="image0_319_834"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export {Sandwiche};