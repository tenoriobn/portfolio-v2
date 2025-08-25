import Link from 'next/link';
import Image from 'next/image';
import { AutoScrollCarouselProps } from './autoScrollCarousel.type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import { useState } from 'react';
import { IconSkeleton } from '../skeleton';

const Styled = {
  Swiper: styled(Swiper)`
    --swiper-wrapper-transition-timing-function: linear !important;
    margin-left: 0;
    cursor: grab;
  `,

  SwiperSlide: styled(SwiperSlide)`
    width: auto;
    --swiper-wrapper-transition-timing-function: linear !important;
  `,
};

export default function AutoScrollCarousel({ icons, iconSize }: AutoScrollCarouselProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const skeletons = Array.from({ length: 24 });

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
      {!isLoaded &&
        skeletons.map((_, index) => (
          <Styled.SwiperSlide key={`skeleton-${index}`}>
            <IconSkeleton $height={iconSize ?? 40} $width={iconSize ?? 40} />
          </Styled.SwiperSlide>
        ))
      }
          
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
              priority
              onLoad={() => setIsLoaded(true)}
              style={{ display: isLoaded ? 'block' : 'none' }}
            />
          </Link>
        </Styled.SwiperSlide>
      ))}
    </Styled.Swiper>
  );
}