import styled from 'styled-components';


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

export const ModalContainer = styled.div`
    background-color: #F6F1F1;
    padding: 2rem;
    position: relative;
`;