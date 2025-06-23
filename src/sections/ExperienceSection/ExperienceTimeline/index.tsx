import Image from 'next/image';
import { useCMSSection } from 'src/hook';
import { BorderButton, borderInsetMixin, borderRaisedMixin, shadowSM } from 'src/styles';
import ArrowIcon from 'public/icons/arrow-right.svg';
import styled from 'styled-components';

const Styled = {
  ExperienciesWrapper: styled.div`
    position: relative;
    display: grid;
    gap: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  Line: styled.div `
    background: ${({ theme }) => theme.gradient['grey-dark-light-dark-reserve']};
    position: absolute;
    left: 10px;
    top: 1px;
    height: calc(100% - 1px);
    width: 2px;
  `,

  Timeline: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .5rem;
    
    @media (min-width: 768px) {
      gap: 1rem;
    }
  `,

  Button: styled.button`
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 20px;
    height: 20px;

    svg {
      rotate: -90deg;
      transform: scale(0.6);
    }
  `,

  ExperiencieBorder: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
  `,

  ExperiencieCard: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  ExperienceInfo: styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 1.5rem;
    }
  `,

  LogoBorderInset: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  CompanyWrapper: styled.div`
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

  Role: styled.p`
    font-size: .875rem;
    font-weight: 600;
  `,

  Period: styled.p`
    font-size: .875rem;
  `,

  JobDescription: styled.p`
    font-style: italic;
  `,
};

export default function ExperienceTimeline() {
  const { experienceContent } = useCMSSection('ExperienceSectionBlockRecord');

  return (
    <Styled.ExperienciesWrapper>
      <Styled.Line></Styled.Line>

      {experienceContent.experiencies.map((experience) => (
        <Styled.Timeline key={experience.id}>
          <BorderButton>
            <Styled.Button>
              <ArrowIcon />
            </Styled.Button>
          </BorderButton>
              
          <Styled.ExperiencieBorder>
            <Styled.ExperiencieCard>
              <Styled.ExperienceInfo>
                <Styled.LogoBorderInset>
                  <Image src={experience.companyLogo.url} alt={experience.companyName} width={66} height={66}/>
                </Styled.LogoBorderInset>

                <Styled.CompanyWrapper>
                  <Styled.CompanyName>{experience.companyName}</Styled.CompanyName>
                  <Styled.Role>{experience.roleArea}</Styled.Role>
                  <Styled.Period>{experience.period}</Styled.Period>
                </Styled.CompanyWrapper>
              </Styled.ExperienceInfo>

              <Styled.JobDescription>{experience.jobDescription}</Styled.JobDescription>
            </Styled.ExperiencieCard>
          </Styled.ExperiencieBorder>
        </Styled.Timeline>
      ))}
    </Styled.ExperienciesWrapper>
  );
}
