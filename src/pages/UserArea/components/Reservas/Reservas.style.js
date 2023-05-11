import styled from 'styled-components';

export const StepIcon = styled.div`
    height: 1.5rem; 
    width: 1.5rem; 
    border-radius: 50%;
    color: black;
    background-color: #f7fafc; 
    text-align: center;
    font-size: 0.167rem; 
    font-weight: bold;
    line-height: 1.5rem; 
`;

export const StepText = styled.div`

    display: none; 

    @media (min-width: 640px) {
    display: block; 
}
`;
