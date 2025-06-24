import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import HtmlIcon from 'public/skills/html.svg';
import CssIcon from 'public/skills/css.svg';
import JsIcon from 'public/skills/js.svg';
import styled from 'styled-components';
import { borderInsetMixin, shadowSM } from 'src/styles';

const Styled = {
  ProjectBorder: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
  `,

  ProjectCard: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    display: grid;
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,
};

const icons = [
  <HtmlIcon key="html1" />,
  <CssIcon key="css1" />,
  <JsIcon key="js1" />,
  <HtmlIcon key="html2" />,
  <CssIcon key="css2" />,
  <JsIcon key="js2" />,
  <HtmlIcon key="html3" />,
  <CssIcon key="css3" />,
  <JsIcon key="js3" />,
  <HtmlIcon key="html4" />,
  <CssIcon key="css4" />,
  <JsIcon key="js4" />,
  <HtmlIcon key="html5" />,
  <CssIcon key="css5" />,
  <JsIcon key="js5" />,
  <HtmlIcon key="html6" />,
  <CssIcon key="css6" />,
  <JsIcon key="js6" />,
  <HtmlIcon key="html7" />,
  <CssIcon key="css7" />,
  <JsIcon key="js7" />,
  <HtmlIcon key="html8" />,
  <CssIcon key="css8" />,
  <JsIcon key="js8" />,
];

export default function SlideSkills() {
  return (
    <Styled.ProjectBorder>       
      <Styled.ProjectCard>      
        <Swiper
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          freeMode={true}
          grabCursor={true}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 'auto' },
          }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <SwiperSlide key={index}>{icon}</SwiperSlide>
          ))}
        </Swiper>
      </Styled.ProjectCard> 
    </Styled.ProjectBorder>
  );
}
