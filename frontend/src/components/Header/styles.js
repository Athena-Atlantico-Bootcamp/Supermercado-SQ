import styled from "styled-components";

export const NomeSupermercado = styled.p`
    font-family: 'Alex Brush', cursive;
    font-size: 4rem;
    color: #F1F1F1;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    @media only screen and (max-width: 1450px) {
        font-size: 3rem;
    }
    @media only screen and (max-width: 800px) {
        margin-block-start: 2rem;
        margin-block-end: 0;
    }
`

export const Container = styled.nav` 
    width: 100vw;
    box-sizing: border-box;
    padding-left: 3rem;
    background-color: #015F43;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1150px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 500px) {
        padding-left: 1rem;
    }
    @media only screen and (max-width: 400px) {
        padding-left: 0.5rem;
    }
`

export const List = styled.ul`
    padding-right: 5rem;
    list-style-type: none;
    font-size: 2rem;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media only screen and (max-width: 1700px) {
        width: 60%;
    }
    @media only screen and (max-width: 1450px) {
        font-size: 1.75rem;
    }
    @media only screen and (max-width: 1150px) {
        width: 100vw;
        margin-top: 0;
    }
    @media only screen and (max-width: 800px) {
        font-size: 1.5rem;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
`
