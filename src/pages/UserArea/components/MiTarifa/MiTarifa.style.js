import styled from 'styled-components';


export const ArrowButton = styled.button`
    width: 250px;
    height: 50px;
    background-color: transparent;
    color: #19A7CE;
    font-size: 24px;
    cursor: pointer;
    position: relative; 
    display: flex;

    &:hover {
        background-color: transparent;
        color: #146C94;
    }
`;

export const Content = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    padding: 10px;
    background-color: #f3f4f6;
    margin-top: 10px;
`;

export const Icon = styled.span`
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%) rotate(${props => (props.showPlans ? '180deg' : '0deg')});
    transition: transform 0.3s ease;
    font-size: 50px;
`;