import styled from 'styled-components';

export const Container = styled.div` 
    padding: 1rem 0rem;
`

export const ContainerName = styled.div` 
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
`

export const Name = styled.p` 
    font-size: 1.5rem;
    color: black;

    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
    }
`

export const Text = styled.p` 
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
    text-align: justify;

    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
    }
`
