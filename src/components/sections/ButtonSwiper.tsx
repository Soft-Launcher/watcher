import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

export const ButtonSwiper = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-6">
      <button className='h-8 w-8 shadow-md flex justify-center items-center' onClick={() => swiper.slidePrev()}><FaAngleLeft className='h-5'/></button>
      <button className='h-8 w-8 shadow-md flex justify-center items-center bg-[#C2EFD4]' onClick={() => swiper.slideNext()}><FaAngleRight className='h-5'/></button>
    </div>
  );
};