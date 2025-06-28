import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { borderInsetMixin, shadowSM } from 'src/styles';
import { useSlideContinuousMove } from './useSlideContinuousMove';
import { useCMSSection } from 'src/hook';
import Image from 'next/image';
import Link from 'next/link';

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
export default function SlideSkills() {
  const { skills } = useCMSSection('SkillsSectionBlockRecord');
  const { swiperRef, toggleAnimation, handleTouchStart, handleTouchEnd } = useSlideContinuousMove(skills.length);

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
          {[...skills].map((skill) => (
            <SwiperSlide key={skill.id} style={{ width: 'auto' }}>
              <Link
                href={skill.href}
                title={skill.linkName}
                rel="noopener noreferrer"
                target='_blank'
              >              
                <Image 
                  src={skill.icon.url} 
                  alt={skill.linkName} 
                  width={48} 
                  height={48} 
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.ProjectCard> 
    </Styled.ProjectBorder>
  );
}