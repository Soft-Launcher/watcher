// import React, { useRef, useState } from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './algo.css';

// import required modules
import {A11y, Pagination} from 'swiper/modules';
import {ButtonSwiper} from './ButtonSwiper';
import {testimonialsArray} from '../../data/portfolio/testimonials';

const Testimonials = () => {
    return (
        <>
            <section id="testimonials" className="flex h-96 justify-center">
                <div className="w-10/12">
                    <h1 className="text-center h-1/6 font-titleMedium text-4xl font-bold text-primaryContainer">
                        Testimonios y reseñas
                    </h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={5}
                        modules={[A11y, Pagination]}
                        className=""
                    >
                        {testimonialsArray.map((testimonial) => (
                            <SwiperSlide>
                                <div
                                    className={'p-5 shadow-xl h-44 m-4 rounded-sm'.concat(
                                        testimonial.index % 2 == 0
                                            ? ' bg-[#EBE0FF]'
                                            : '',
                                    )}
                                >
                                    <p className="text-4xl font-serif">“</p>
                                    <p className="text-xl font-titleMedium font-bold mb-5">
                                        {testimonial.autor}
                                    </p>
                                    <p className="">
                                        {testimonial.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="flex justify-center m-10">
                            <ButtonSwiper></ButtonSwiper>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
