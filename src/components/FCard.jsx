import React from 'react';
import StarRating from './StarRating';

const FCard = ({ feedback }) => {
  return (
    <div className='bg-white m-4 p-4 rounded-lg shadow-lg'>
      <div className='rounded-full overflow-hidden w-8 h-8 m-2 flex'>
        <img src={feedback.imgsrc || "./imgs/user.png"} alt='user img' className='bg-cover' />
      </div>
      <div className='flex-row'>
        <StarRating rating={feedback.rating} />
        <p className='px-1'>{feedback.paragraph}</p>
        <span className='flex justify-end text-xs italic'>{"~ " + feedback.name}</span>
      </div>
    </div>
  );
}

export default FCard;
