import styled from 'styled-components';
import ToolsIcon from 'public/icons/tools.svg';
import DartIcon from 'public/icons/dart.svg';
import MobileIcon from 'public/icons/mobile.svg';
import AutoScrollCarousel from 'src/components/AutoScrollCarousel';
import { ProjectInfoModalProps } from './projectInfoModal.type';

const Styled = {
  Line: styled.span`
    background: var(--gradient-grey-dark-light-dark-reserve);
    width: 100%;
    height: 1px;
  `,

  Content: styled.main`
    display: grid;
    gap: 1.5rem;
  `,

  Block: styled.div`
    display: grid;
    gap: 0.75rem;
  `,

  BlockTitle: styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,

  ItemList: styled.ul`
    display: grid;
    gap: 0.5rem;
    list-style: disc;
    padding-left: 1.5rem;
  `,

  SkillList: styled.div`
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
      <Styled.Line />
      
      <Styled.Content>
        <p>{projectDescription}</p>
        
        {appliedSolutions && (
          <Styled.Block>
            <Styled.BlockTitle>
              <ToolsIcon aria-hidden="true" />
              {appliedSolutions.title}
            </Styled.BlockTitle>

            <Styled.ItemList>
              {appliedSolutions.solution?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </Styled.ItemList>
          </Styled.Block>
        )}

        {challenges && (
          <Styled.Block>
            <Styled.BlockTitle>
              <DartIcon aria-hidden="true" />
              {challenges.title}
            </Styled.BlockTitle>
            
            <Styled.ItemList>
              {challenges.challenge?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </Styled.ItemList>
          </Styled.Block>
        )}

        {skills && (
          <Styled.Block>      
            <Styled.BlockTitle>
              <MobileIcon aria-hidden="true" />
              {skills.title}
            </Styled.BlockTitle>

            <AutoScrollCarousel icons={skills.skill} />
          </Styled.Block>
        )}
      </Styled.Content>

      <Styled.Line />
    </>
  );
}