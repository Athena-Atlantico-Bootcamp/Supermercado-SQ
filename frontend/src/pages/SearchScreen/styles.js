import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;

`

export const TextoProcura = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #015F43;
    text-align: center;
    max-width: 95vw;

    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const ContainerGeral = styled.div`
    box-sizing: border-box;
    margin: 3rem 2.5rem;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: 950px) {
        flex-direction: column;
    }
`

export const ContainerBusca = styled.div`
    width: 20rem;
    height: 100%;
    padding-right: 0.5rem;

    @media only screen and (max-width: 950px) {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ContainerResposta = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.5rem;

    @media only screen and (max-width: 1390px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

export const Texto = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem 0;

    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export const BtnProcurar = styled.input`
    width: 9rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #015F43;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    margin: 0.5rem 0 1rem 0;

    @media only screen and (max-width: 768px) {
        width: 8rem;
        height: 2rem;
    }
`
export const CaixaTexto = styled.input`
    width: 90%;
    height: 1.8rem;

    @media only screen and (max-width: 768px) {
        height: 1.5rem;
    }
`