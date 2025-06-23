import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useCMSSection } from 'src/hook';
import Image from 'next/image';
import MagnifyingGlass from 'public/icons/magnifying-glass.svg';
import styled from 'styled-components';
import { BaseButton, BorderButton, borderInsetMixin, borderRaisedMixin, shadowSM, textGradient } from 'src/styles';

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
    gap: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,

  BorderImage: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
  `,

  Image: styled(Image)`
    border-radius: ${({ theme }) => theme.borderRadius.md};
    object-position: top;
    object-fit: cover;
    width: 100%;
    height: 312px;

    @media (min-width: 768px) {
      height: 334px;
    }
  `,

  BorderContent: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    height: 100%;
  `,

  ProjectContet: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    display: grid;
    place-items: center;
    gap: 1rem;

    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,

  ProjectTitle: styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    ${textGradient}

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  BorderButton: styled(BorderButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  Button: styled(BaseButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['grey-500']};
    padding: 1rem 1.5rem;

    width: 100%;
  `,
};

export default function Slide() {
  const { projects } = useCMSSection('ProjectsSectionBlockRecord');

  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          580: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={24}
        pagination={{
          el: '.custom-swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          renderBullet: (_, className) => {
            return `<span class="${className}"><div class="pagination-bullet"></div></span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Styled.ProjectBorder>
              <Styled.ProjectCard>
                <Styled.BorderImage>
                  <Styled.Image src={project.projectGallery[0].url} alt='' width={400} height={600} />
                </Styled.BorderImage>

                <Styled.BorderContent>
                  <Styled.ProjectContet>
                    <Styled.ProjectTitle>{project.projectTitle}</Styled.ProjectTitle>

                    <Styled.BorderButton>
                      <Styled.Button> 
                        <MagnifyingGlass /> 
                        {project.modalButtonLabel}
                      </Styled.Button>
                    </Styled.BorderButton>
                  </Styled.ProjectContet>
                </Styled.BorderContent>
              </Styled.ProjectCard>
            </Styled.ProjectBorder>
          </SwiperSlide>
        ))}

        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>

      <div className="custom-swiper-pagination" />
    </>
  );
}
