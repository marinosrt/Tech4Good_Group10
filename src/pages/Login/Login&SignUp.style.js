import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    color: #718096;
    padding: 0.5rem 0.75rem;
    line-height: 1.6;
    transition: color 0.2s ease-in-out;

    &:focus {
        border-color: #667eea;
        box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.5);
        outline: none;
    }

    &:focus::placeholder {
        color: transparent;
    }
`;

export const Label = styled.label`
line-height: 1.75; 
font-size: 0.875rem; 
color: #6b7280;
`;

export const OrContainer = styled.div`
    text-align: center;
    border-bottom: 1px solid #E2E8F0;
    line-height: 0;
    margin: 2rem 0;
`;

export const OrSpan = styled.span`
    padding: 5px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #718096;
    text-transform: uppercase;
    background-color: #FFFFFF;
    line-height: 0;
`;

export const GoogleButton = styled.button`
    background-color: #fff; 
    color: #4b5563; 
    display: flex;
    justify-content: center;
    font-weight: 600; 
    padding: 0.5rem 1rem; 
    border: 1px solid #cbd5e0; 
    border-radius: 0.25rem; 
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); 
    
        &:hover {
        background-color: #f7fafc; 
        }
`

export const Span = styled.span`
    font-size: 0.875rem; 
    color: #19A7CE; 
    margin-top: 0.75rem; 
    text-align: right;
`;