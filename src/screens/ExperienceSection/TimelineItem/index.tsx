import Image from 'next/image';
import { BorderButton, borderInsetMixin, borderRaisedMixin, shadowSM } from 'src/styles';
import ArrowIcon from 'public/icons/arrow-right.svg';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { useExperienceTimeline } from './useExperienceTimeline';
import { expandCollapseFade } from 'src/utils';
import { handleScrollAfterExpand } from './handleScrollAfterExpand';

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

  ToggleButton: styled.button<{ $isExpanded: boolean}>`
    display: grid;
    place-items: center;
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-full);
    width: 20px;
    height: 20px;

    svg {
      rotate: ${({ $isExpanded }) => $isExpanded ? '-90deg' : '90deg'};
      transform: scale(0.6);
    }
  `,

  CardWrapper: styled(motion.div)`
    ${borderInsetMixin}
    ${shadowSM}
    cursor: pointer;
    border-radius: var(--radius-md);
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,

  Card: styled.div`
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-md);
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  ExperienceHeader: styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
  `,

  Logo: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-full);
  `,

  Info: styled.div`
    display: grid;
    gap: .25rem;
  `,

  Company: styled.h3`
    font-size: .875rem;
    font-weight: 600;

    @media (min-width: 375px) {
      font-size:clamp(1.125rem, 3vw, 1.25rem);;
    }
  `,

  Role: styled.p`
    font-size: .875rem;
    font-weight: 600;
  `,

  Period: styled.p`
    font-size: .875rem;
  `,

  JobDescription: styled(motion.p)`
    font-style: italic;
    padding-top: 1rem;

    @media (min-width: 768px) {
      padding-top: 1.5rem;
    }
  `,
};

export default function TimelineItem() {
  const { experiences, toggleExpand, isExpanded, refs } = useExperienceTimeline();

  return (
    <>    
      {experiences.map((experience) => (
        <Styled.TimelineItem key={experience.id}>
          <BorderButton onClick={() => toggleExpand(experience.id)}>
            <Styled.ToggleButton $isExpanded={isExpanded(experience.id)}>
              <ArrowIcon />
            </Styled.ToggleButton>
          </BorderButton>

          <Styled.CardWrapper 
            ref={(el) => {refs.current[experience.id] = el;}}
            onClick={() => toggleExpand(experience.id)}
          >
            <Styled.Card>
              <Styled.ExperienceHeader>
                <Styled.Logo>
                  <Image src={experience.companyLogo.url} alt={experience.companyName} width={66} height={66}/>
                </Styled.Logo>

                <Styled.Info>
                  <Styled.Company>{experience.companyName}</Styled.Company>
                  <Styled.Role>{experience.roleArea}</Styled.Role>
                  <Styled.Period>{experience.period}</Styled.Period>
                </Styled.Info>
              </Styled.ExperienceHeader>

              <AnimatePresence initial={false}>
                {isExpanded(experience.id) && (
                  <motion.div 
                    key="description" 
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={expandCollapseFade}
                    onAnimationComplete={() => handleScrollAfterExpand(experience.id, refs)}
                  >
                    <Styled.JobDescription>{experience.jobDescription}</Styled.JobDescription>
                  </motion.div>
                )}
              </AnimatePresence>
            </Styled.Card>
          </Styled.CardWrapper>
        </Styled.TimelineItem>
      ))}
    </>
  );
}