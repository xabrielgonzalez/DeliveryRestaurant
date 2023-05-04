import React, { useState } from "react";

function Star() {
  const [starColor, setStarColor] = useState("#ffff");
  
  const handleClick = () => {
    if (starColor === "#ffff") {
      setStarColor("#C20114");
    } else {
      setStarColor("#ffff");
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="28"
      fill={starColor}
      viewBox="0 0 38 36"
      onClick={handleClick}
    >
      <path
        stroke="#C20114"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M20.03 2.395l3.812 9.082a1.312 1.312 0 001.094.801l9.755.843a1.312 1.312 0 01.745 2.309l-7.4 6.456a1.326 1.326 0 00-.418 1.294l2.219 9.604a1.313 1.313 0 01-1.951 1.426l-8.384-5.086a1.301 1.301 0 00-1.352 0L9.767 34.21a1.312 1.312 0 01-1.951-1.426l2.218-9.604a1.325 1.325 0 00-.417-1.294l-7.4-6.456a1.312 1.312 0 01.744-2.309l9.756-.843a1.312 1.312 0 001.094-.8l3.811-9.083a1.313 1.313 0 012.409 0z"
      ></path>
    </svg>
  );
}

export { Star };
