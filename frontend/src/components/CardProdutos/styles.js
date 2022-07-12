import styled from "styled-components";

export const Card = styled.div`
    background-color: rgb(255, 255, 255);
    width: 15.5rem;
    height: 23.8rem;
    border: 0.06px solid rgb(255, 255, 255);
    border-radius: 0.6rem;
    text-align: center;
    margin: 0.5rem;

    &:hover{
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        width: 13rem;
        height: 21rem;
    }
`

export const LinkProduct = styled.a `
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
`

export const CardElements = styled.div `
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-top: 3rem; 
`

export const ImageDiv = styled.div `
    width: 8rem;
    height: 12rem;
    margin: auto;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        width: 6.5rem;
        height: 10.5rem;
    }
`

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin: 0;
`

export const Text = styled.p`
    font-size: 1.5rem;
    margin: 0;
    margin-top: 2.3rem;

    @media only screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`