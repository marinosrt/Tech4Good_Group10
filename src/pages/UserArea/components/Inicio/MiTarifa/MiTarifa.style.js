import styled from 'styled-components';


export const ArrowButton = styled.span`
    color: #19A7CE;
    font-size: 3rem;
    cursor: pointer;
    display: flex;
    transform: rotate(${props => (props.showPlans ? '180deg' : '0deg')});
    transition: transform 0.3s ease;
`;

export const Content = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    padding: 10px;
    background-color: #f3f4f6;
    margin-top: 10px;
`;
