"use client";

import React, { useState } from "react";
import Star from "./Star";

const StarButton = () => {
  const [isStarFilled, setIsStarFilled] = useState(false);

  const handleButtonClick = () => {
    setIsStarFilled(!isStarFilled);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        <Star isFilled={isStarFilled} />
      </button>
    </div>
  );
};

export default StarButton;
