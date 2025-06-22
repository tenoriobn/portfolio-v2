import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`;