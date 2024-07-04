import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={stars.length} className="text-yellow-500" />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
