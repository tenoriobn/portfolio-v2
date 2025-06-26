import { Pagination } from 'swiper/modules';

export const swiperConfig = {
  breakpoints: {
    0: { slidesPerView: 1 },
    580: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  spaceBetween: 24,
  pagination: {
    el: '.projects-carousel-pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: (_: number, className: string): string => {
      return `<span class="${className}"><div class="pagination-bullet"></div></span>`;
    },
  },
  modules: [Pagination],
};