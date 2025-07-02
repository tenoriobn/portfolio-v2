import Link from 'next/link';
import Image from 'next/image';
import { AutoScrollCarouselProps } from './autoScrollCarousel.type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styled from 'styled-components';

const Styled = {
  Swiper: styled(Swiper)`
    --swiper-wrapper-transition-timing-function: linear !important;
    margin-left: 0;
  `,

  SwiperSlide: styled(SwiperSlide)`
    width: auto;
    --swiper-wrapper-transition-timing-function: linear !important;
  `,
};

export default function AutoScrollCarousel({ icons, iconSize }: AutoScrollCarouselProps) {
  return (
    <Styled.Swiper
      spaceBetween={16}
      slidesPerView="auto"
      speed={2500}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 0,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
    >
      {icons.map((item) => (
        <Styled.SwiperSlide key={item.id}>
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Tecnologia: ${item.linkName}`}
            title={item.linkName}
          >
            <Image
              src={item.icon.url}
              alt={item.linkName}
              width={iconSize ?? 40}
              height={iconSize ?? 40}
            />
          </Link>
        </Styled.SwiperSlide>
      ))}
    </Styled.Swiper>
  );
}