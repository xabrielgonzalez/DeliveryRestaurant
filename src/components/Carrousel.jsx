import React, { useState, useEffect } from "react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import { ButtonCarouselR } from "../svgComponents/ButtonCarouselR";
import { ButtomCarouselL } from "../svgComponents/ButtomCarouselL";

export const Carrousel = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, [position]);

  const scrollL = () => {
    setPosition(position === 0 ? 2 : position - 1);
  };

  const scrollR = () => {
    setPosition((position + 1) % 3);
  };

  return (
    <div className="relative">
      <div className="absolute left-0 top-20">
        <button onClick={scrollL} className="p-10">
          <ButtomCarouselL />
        </button>
      </div>
      <div className="absolute right-0 top-20">
        <button onClick={scrollR} className="p-4">
          <ButtonCarouselR />
        </button>
      </div>
      <div className="flex gap-20 scroll-smooth" id="content">
        {position === 0 && (
          <>
            <div>
              <Card1 />
            </div>
            <div>
              <Card2 />
            </div>
            <div>
              <Card3 />
            </div>
          </>
        )}
        {position === 1 && (
          <>
            <div>
              <Card2 />
            </div>
            <div>
              <Card3 />
            </div>
            <div>
              <Card1 />
            </div>
          </>
        )}
        {position === 2 && (
          <>
            <div>
              <Card3 />
            </div>
            <div>
              <Card1 />
            </div>
            <div>
              <Card2 />
            </div>
            
          </>
        )}
      </div>
    </div>
  );
};
