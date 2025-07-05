import Image from 'next/image';
import { BorderButton, borderInsetMixin, borderRaisedMixin, OverflowAnimationFixed, shadowSM, transitionThemeAnimation } from 'src/styles';
import ArrowIcon from 'public/icons/arrow-right.svg';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { useExperienceTimeline } from './useExperienceTimeline';
import { expandCollapseFade } from 'src/utils';
import { handleScrollAfterExpand } from './handleScrollAfterExpand';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  TimelineItem: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .5rem;
    
    @media (min-width: 768px) {
      gap: 1rem;
    }
  `,

  ExpandButton: styled.button<{ $isExpanded: boolean}>`
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 5;
    ${transitionThemeAnimation}

    svg {
      rotate: ${({ $isExpanded }) => $isExpanded ? '-90deg' : '90deg'};
      transform: scale(0.6);
    }
  `,

  ExperienceCardWrapper: styled(motion.div)`
    ${borderInsetMixin}
    ${shadowSM}
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,

  ExperienceCard: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 1rem;
    position: relative;
    z-index: 5;
    ${transitionThemeAnimation}

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  OverflowAnimationFixed: styled(OverflowAnimationFixed)`
    border-radius: ${({ theme }) => theme.borderRadius.md};
    z-index: 0;
  `,

  ExperienceHeader: styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    position: relative;
    z-index: 5;
  `,

  CompanyLogoWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  ExperienceInfo: styled.div`
    display: grid;
    gap: .25rem;
  `,

  CompanyName: styled.h3`
    font-size: .875rem;
    font-weight: 600;

    @media (min-width: 375px) {
      font-size:clamp(1.125rem, 3vw, 1.25rem);;
    }
  `,

  RoleName: styled.p`
    font-size: .875rem;
    font-weight: 600;
  `,

  PeriodText: styled.p`
    font-size: .875rem;
  `,

  JobDescription: styled(motion.p)`
    font-style: italic;
    padding-top: 1rem;
    position: relative;
    z-index: 5;

    @media (min-width: 768px) {
      padding-top: 1.5rem;
    }
  `,
};

export default function ExperienceTimelineItem() {
  const { experiences, toggleExpand, isExpanded, refs } = useExperienceTimeline();

  return (
    <>    
      {experiences.map((experience) => (
        <Styled.TimelineItem key={experience.id}>
          <BorderButton onClick={() => toggleExpand(experience.id)}>
            <Styled.ExpandButton $isExpanded={isExpanded(experience.id)}>
              <OverflowAnimationFixed>
                <DarkModeAnimate position="fixed" background="grey-800-75%" />
              </OverflowAnimationFixed>

              <ArrowIcon />
            </Styled.ExpandButton>
          </BorderButton>

          <Styled.ExperienceCardWrapper 
            ref={(el) => {refs.current[experience.id] = el;}}
            onClick={() => toggleExpand(experience.id)}
          >
            <Styled.ExperienceCard>
              <Styled.OverflowAnimationFixed>
                <DarkModeAnimate position="fixed" background="grey-800-75%" />
              </Styled.OverflowAnimationFixed>
              
              <Styled.ExperienceHeader>
                <Styled.CompanyLogoWrapper>
                  <Image src={experience.companyLogo.url} alt={experience.companyName} width={66} height={66}/>
                </Styled.CompanyLogoWrapper>

                <Styled.ExperienceInfo>
                  <Styled.CompanyName>{experience.companyName}</Styled.CompanyName>
                  <Styled.RoleName>{experience.roleArea}</Styled.RoleName>
                  <Styled.PeriodText>{experience.period}</Styled.PeriodText>
                </Styled.ExperienceInfo>
              </Styled.ExperienceHeader>

              <AnimatePresence initial={false}>
                {isExpanded(experience.id) && (
                  <motion.div 
                    key="description" 
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={expandCollapseFade}

                    // {...expandCollapseFade}
                    onAnimationComplete={() => handleScrollAfterExpand(experience.id, refs)}
                  >
                    <Styled.JobDescription>{experience.jobDescription}</Styled.JobDescription>
                  </motion.div>
                )}
              </AnimatePresence>
            </Styled.ExperienceCard>
          </Styled.ExperienceCardWrapper>
        </Styled.TimelineItem>
      ))}
    </>
  );
}