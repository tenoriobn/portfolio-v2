import { Autoplay, Pagination } from 'swiper/modules';

export const createSwiperConfig = (
  paginationClass: string, 
  breakpoints?: Record<number, { slidesPerView: number }>
) => ({
  breakpoints: breakpoints || {
    0: { slidesPerView: 1 },
    580: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: `.${paginationClass}`,
    clickable: true,
    dynamicBullets: true,
    renderBullet: (_: number, className: string): string => {
      return `<span class="${className}"><div class="pagination-bullet"></div></span>`;
    },
  },
  modules: [Autoplay, Pagination],
});