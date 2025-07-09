import styled from 'styled-components';
import ToolsIcon from 'public/icons/tools.svg';
import DartIcon from 'public/icons/dart.svg';
import MobileIcon from 'public/icons/mobile.svg';
import AutoScrollCarousel from 'src/components/AutoScrollCarousel';
import { ProjectInfoModalProps } from './projectInfoModal.type';

const Styled = {
  Divider: styled.span`
    background: var(--gradient-grey-dark-light-dark-reserve);
    width: 100%;
    height: 1px;
  `,

  Main: styled.main`
    display: grid;
    gap: 1.5rem;
  `,

  Section: styled.div`
    display: grid;
    gap: 0.75rem;
  `,

  SectionTitle: styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,

  List: styled.ul`
    display: grid;
    gap: 0.5rem;
    list-style: disc;
    padding-left: 1.5rem;
  `,

  SkillsGrid: styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  `,
};

export default function ProjectInfoModal({ project }: ProjectInfoModalProps) {
  const {  projectDescription,  appliedSolutions, challenges, skills, } = project;

  return (
    <>
      <Styled.Divider />
      
      <Styled.Main>
        <p>{projectDescription}</p>
        
        {appliedSolutions && (
          <Styled.Section>
            <Styled.SectionTitle>
              <ToolsIcon aria-hidden="true" />
              {appliedSolutions.title}
            </Styled.SectionTitle>

            <Styled.List>
              {appliedSolutions.solution?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </Styled.List>
          </Styled.Section>
        )}

        {challenges && (
          <Styled.Section>
            <Styled.SectionTitle>
              <DartIcon aria-hidden="true" />
              {challenges.title}
            </Styled.SectionTitle>
            
            <Styled.List>
              {challenges.challenge?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </Styled.List>
          </Styled.Section>
        )}

        {skills && (
          <Styled.Section>      
            <Styled.SectionTitle>
              <MobileIcon aria-hidden="true" />
              {skills.title}
            </Styled.SectionTitle>

            <AutoScrollCarousel icons={skills.skill} />
          </Styled.Section>
        )}
      </Styled.Main>

      <Styled.Divider />
    </>
  );
}