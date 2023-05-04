import styled from 'styled-components';


export const Card = styled.div`
  padding: 2rem 2.5rem;
  position: relative;
  z-index: 10;
  width: 100%;
  border: 4px solid #CBD5E0;
  background-color: #FFF;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;
