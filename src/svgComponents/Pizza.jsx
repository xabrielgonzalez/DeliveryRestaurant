import React from "react";

function Pizza() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="158"
      height="211"
      fill="none"
      viewBox="0 0 158 211"
    >
      <g filter="url(#filter0_d_781_439)">
        <g filter="url(#filter1_d_781_439)">
          <circle cx="79" cy="78" r="75" fill="#fff"></circle>
        </g>
        <path
          fill="url(#pizza)"
          d="M31.692 30.692H126.30699999999999V125.30699999999999H31.692z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_781_439"
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
            result="effect1_dropShadow_781_439"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_781_439"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_781_439"
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
            result="effect1_dropShadow_781_439"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_781_439"
            result="shape"
          ></feBlend>
        </filter>
        <pattern
          id="pizza"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_781_439"></use>
        </pattern>
        <image
          id="image0_781_439"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export {Pizza};