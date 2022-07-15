import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import ButtonsType from "../../components/Buttons";

import { ButtonCadastrar, ButtonDiv, Container, ContainerProduto, ContainerUser, Title, Line, Info, PlusCircleIcon } from "./styles";
import { useState, useEffect } from "react";
import api from '../../service/api';


function LoginUser() {

  const axios = require('axios');
  
  const [products, setProducts] = useState([]);

  function getProductsByUserId() {
    try {
      api.get(`/produtos/usuario/${idProduto}`)
      .then( (res) => {
        setProducts(res.data)
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {getProductsByUserId()}, [])

  return (
    <div>
      <Header />
          <Container>
            <ContainerUser>
              <Title>Meus dados</Title>
              
              <div>
                <Info>Nome: </Info>
                <Info>Telefone: </Info>
                <Info>Email: </Info>
                <Info>Restrições: </Info>
                <ButtonDiv>
                  <ButtonsType tipo='Editar'/>
                  <ButtonsType tipo='Logout'/>
                </ButtonDiv>    
              </div>
            </ContainerUser>

            <Line />

            <ContainerProduto>
              <Title>Produtos Cadastrados</Title>
              <ButtonCadastrar><PlusCircleIcon /> Cadastrar novo produto</ButtonCadastrar>

              <div>
                <Info>Nome: {product.nome}</Info>
                <Info>Nome: </Info>
                <Info>Descrição: </Info>
                <Info>Ingredientes: </Info>
                <ButtonDiv>
                  <ButtonsType tipo='Editar'/>
                  <ButtonsType tipo='Deletar'/>
                </ButtonDiv>    
              </div>

              <div>
                <Info>Nome: </Info>
                <Info>Descrição: </Info>
                <Info>Ingredientes: </Info>
                <ButtonDiv>
                  <ButtonsType tipo='Editar'/>
                  <ButtonsType tipo='Deletar'/>
                </ButtonDiv>     
              </div>
            </ContainerProduto>
          </Container>
        <Footer />

    </div>
  )
}

export default LoginUser