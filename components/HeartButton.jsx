'use client';

import { useState } from 'react';

const HeartButton = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={toggleLike}
      type="button"
      className="flex items-center justify-center w-full h-full"
    >
      <i
        className={`${
          isLiked ? 'fa-solid text-red-500' : 'fa-regular text-[#13244A]'
        } fa-heart text-base transition-colors duration-200`}
      />
    </button>
  );
};

export default HeartButton;