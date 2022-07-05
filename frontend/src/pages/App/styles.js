import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 8rem 4rem 5rem;

    @media only screen and (max-width: 1070px) {
        padding: 4rem;
    }

    @media only screen and (max-width: 768px) {
        padding: 1rem;
    }
`

export const ContainerTitulo = styled.div` 
    display: flex;
    justify-content: center;
`

export const Titulo = styled.p` 
    font-size: 2rem;
    font-weight: bold;
    color: #015F43;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
`