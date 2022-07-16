import styled from 'styled-components';
import { PlusCircle } from "phosphor-react";

export const Container = styled.div `
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: 1000px;
  }
`

export const ContainerUser = styled.div `
  height: 500px;
  padding: 50px;
  width: 50%;
  @media only screen and (max-width: 800px){
    width: 80%;
  }
`

export const ContainerProduto = styled.div `
  height: 500px;
  padding: 50px;
  width: 50%;
  @media only screen and (max-width: 800px){
    width: 80%;
  }
`

export const Title = styled.h2 `
  color: #015F43;
  text-align: center;
`

export const Line = styled.div`
    border-left: 3px solid #FBA94C;
    height: 400px;
    margin-top: 50px;

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      transform: rotate(90deg);
  }
` 

export const Info = styled.p `
    margin: 10px 0;
`

export const ButtonCadastrar = styled.button `
  align-items: center;
  background-color: #015F43;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  padding: 10px;
  margin: auto;
`

export const PlusCircleIcon = styled(PlusCircle) `
    margin: 5px;
    font-size: 25px;
    color: #ffffff;
`

export const ButtonDiv = styled.div `
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
`
export const InfoName = styled.span `
  font-weight: bold;
`
