import styled from "styled-components";

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


export const Text = styled.p` 
font-size: 2rem;
font-weight: bold;
color: #015F43;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}
`


export const TextDescription = styled.p` 
font-size: 1.5rem;
color: black;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}
`

export const ContainerCard = styled.div` 
    
`


export const ContainerColumn = styled.div` 
    display:flex;

`


export const ContainerImg = styled.div` 
width: 400px;
height: 400px;
background-color: grey;


`

const Img = styled.img`
    width: 100%;
    height: 100%;
    
    
`;

export const ContainerDescription = styled.div`
    width: 700px;
    height: 400px;
    background-color: white;
    overflow-y: scroll;
`


export const ContainerTitulo = styled.div`
    margin-left: 6%;
    
`


export const Titulo = styled.p` 
    font-size: 2rem;
    font-weight: bold;
    color: black;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
`

export const ContainerComents = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    box-sizing: border-box;
    padding-top: 3rem;
`

export const Usuario = styled.h2`
font-size: 2rem;
font-weight: bold;
color: #015F43;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}

`

export const Data = styled.p`
    font-weight: bold;
`

export const Comentario = styled.p`
font-size: 1.5rem;
color: black;

@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}
    
`

export const CardComents = styled.div`
width: 100%;
box-sizing: border-box;

    
`
