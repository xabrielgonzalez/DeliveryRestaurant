import React from "react";

function Dessert() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="158"
      height="161"
      fill="none"
      viewBox="0 0 158 161"
    >
      <g filter="url(#filter0_d_781_430)">
        <g filter="url(#filter1_d_781_430)">
          <circle cx="79" cy="78" r="75" fill="#fff"></circle>
        </g>
        <path
          fill="url(#dessert)"
          d="M31.692 30.692H126.30699999999999V125.30699999999999H31.692z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_781_430"
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
            result="effect1_dropShadow_781_430"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_781_430"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_781_430"
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
            result="effect1_dropShadow_781_430"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_781_430"
            result="shape"
          ></feBlend>
        </filter>
        <pattern
          id="dessert"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_781_430"></use>
        </pattern>
        <image
          id="image0_781_430"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export {Dessert};