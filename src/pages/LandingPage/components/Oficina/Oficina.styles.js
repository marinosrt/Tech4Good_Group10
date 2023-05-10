import styled from 'styled-components';


export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 2.5rem;
  position: relative;
  z-index: 10;
  width: 100%;
  border: 4px solid #F6F1F1;
  background-color: #FEFEFE;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;
