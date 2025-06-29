import styled from 'styled-components';
import { borderInsetMixin, shadowSM } from 'src/styles';
import { useCMSSection } from 'src/hook';
import Image from 'next/image';
import Link from 'next/link';

const Styled = {
  ProjectBorder: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    overflow: hidden;
  `,

  Spacing: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  ProjectCard: styled.div`
    overflow: auto hidden ;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  SliderTrack: styled.div`
    display: flex;
    gap: 1.5rem;
    width: fit-content;
    animation: scroll 28s linear infinite;

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    &:hover {
      animation-play-state: paused;
    }
  `,

  SliderWrapper: styled.div`
    display: flex;
    width: max-content;
    
  `,

  IconLink: styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    img {
      width: 100%;
      height: auto;
    }
  `,
};

export default function SlideSkills() {
  const { skills } = useCMSSection('SkillsSectionBlockRecord');

  return (
    <Styled.ProjectBorder>      
      <Styled.Spacing>
        <Styled.ProjectCard>
          <Styled.SliderWrapper>
            <Styled.SliderTrack>
              {[...skills, ...skills].map((skill, index) => (
                <Styled.IconLink
                  key={`${skill.id}-${index}`}
                  href={skill.href}
                  title={skill.linkName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={skill.icon.url}
                    alt={skill.linkName}
                    width={48}
                    height={48}
                    loading="lazy"
                    unoptimized={false}
                  />
                </Styled.IconLink>
              ))}
            </Styled.SliderTrack>
          </Styled.SliderWrapper>
        </Styled.ProjectCard> 
      </Styled.Spacing> 
    </Styled.ProjectBorder>
  );
}
