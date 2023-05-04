import styled from "styled-components";

export const FeeContainer = styled.div`
    height: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 2px solid #ccc;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

export const IconContainer = styled.div`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #cbd5e0;
    color: #fff;
    border-radius: 50%;
    flex-shrink: 0;
`;

export const Price = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: #111827;
    line-height: 1;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #E5E7EB;
`;

export const Span = styled.span`
    font-size: 1.5rem;
    align-self: end;
    padding: 0 0 0.1rem 0.2rem;
`;