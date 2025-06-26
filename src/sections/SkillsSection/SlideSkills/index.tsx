import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { borderInsetMixin, shadowSM } from 'src/styles';
import { useSlideContinuousMove } from './useSlideContinuousMove';
import HtmlIcon from 'public/skills/html.svg';
import CssIcon from 'public/skills/css.svg';
import JsIcon from 'public/skills/js.svg';

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
  <HtmlIcon key="html9" />,
  <CssIcon key="css9" />,
  <JsIcon key="js9" />,
  <HtmlIcon key="html10" />,
  <CssIcon key="css10" />,
  <JsIcon key="js10" />,
  <HtmlIcon key="html11" />,
  <CssIcon key="css11" />,
  <JsIcon key="js11" />,
  <HtmlIcon key="html1213" />,
  <CssIcon key="css1213" />,
  <JsIcon key="js1213" />,
  <HtmlIcon key="html13" />,
  <CssIcon key="css13" />,
  <JsIcon key="js13" />,
  <HtmlIcon key="html1415" />,
  <CssIcon key="css1415" />,
  <JsIcon key="js1415" />,
  <HtmlIcon key="html15" />,
  <CssIcon key="css15" />,
  <JsIcon key="js15" />,
];

export default function SlideSkills() {
  const { swiperRef, toggleAnimation, handleTouchStart, handleTouchEnd } = useSlideContinuousMove(icons.length);

  return (
    <Styled.ProjectBorder>       
      <Styled.ProjectCard>      
        <Swiper
          ref={swiperRef}
          spaceBetween={24}
          loop={true}
          autoplay={false}
          speed={300}
          freeMode={true}
          grabCursor={true}
          allowTouchMove={true}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 'auto' },
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={toggleAnimation}
        >
          {[...icons, ...icons, ...icons].map((icon, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              {icon}
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.ProjectCard> 
    </Styled.ProjectBorder>
  );
}