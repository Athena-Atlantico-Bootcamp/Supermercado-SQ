import styled from "styled-components";

export const NomeSupermercado = styled.p`
    font-family: 'Alex Brush', cursive;
    font-size: 2.5rem;
    color: #F1F1F1;
    
    @media only screen and (max-width: 1200px) {
        font-size: 2rem;
    }
`

export const Container = styled.nav` 
    width: 100vw;
    box-sizing: border-box;
    padding: 2.25rem 3.73rem 1rem 3.75rem;
    background-color: #015F43;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    @media only screen and (min-width: 1900px) {
        padding: 2.25rem 7rem 1rem 7rem; 
        justify-content: space-around;
    }
    @media only screen and (max-width: 950px) {
        padding: 1.5rem ;
        flex-direction: column;
    }
`

