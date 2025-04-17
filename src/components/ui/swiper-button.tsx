import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { useSwiper } from 'swiper/react';
import Icons from '~/components/share/icons';

const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <button
                onClick={() => swiper.slidePrev()}
                className="absolute top-1/2 left-4 z-10 -translate-y-1/2 p-1.5 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200 disabled:opacity-50"
                aria-label="Previous slide"
            >
                <Icons.chevronLeft size={24} className="text-gray-800" />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="absolute top-1/2 right-4 z-10 -translate-y-1/2 p-1.5 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200 disabled:opacity-50"
                aria-label="Next slide"
            >
                <Icons.chevronRight size={24} className="text-gray-800" />
            </button>
        </div>
    );
};
export default SwiperButtons;