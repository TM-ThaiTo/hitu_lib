'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import Link from 'next/link'
import SwiperButtons from '~/components/ui/swiper-button'

interface SwiperGalleryItem {
    url: string
    link?: string
}

interface SwiperGalleryProps {
    urls: SwiperGalleryItem[]
}

const Banner = ({ urls }: SwiperGalleryProps) => {
    if (!urls || urls.length === 0) return null

    return (
        <section className='max-w-[1074px] max-h-[460px]'>
            <div className="relative rounded-[5px] bg-white shadow-lg border border-gray-300">
                <div className="relative w-full aspect-[1074/460] sm:aspect-video max-h-[460px]">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        speed={1000}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        className="w-full h-full"
                    >
                        {urls.map((item, index) => {
                            const imageUrl = typeof item === 'string' ? item : item.url
                            const link = typeof item === 'string' ? undefined : item.link
                            return (
                                <SwiperSlide key={index} className="relative w-full h-full p-[5px]">
                                    <Link href={link || '#'} className="block w-full h-full max-h-[450px] relative">
                                        <Image
                                            src={imageUrl}
                                            alt={`Image name ${imageUrl}`}
                                            fill
                                            className="object-cover rounded-[5px]"
                                            priority={index === 0}
                                        />
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                        <SwiperButtons />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Banner
