import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import ButtonsType from "../../components/Buttons";

import { ButtonCadastrar, ButtonDiv, Container, ContainerProduto, ContainerFornecedor, Title, Line, Info, PlusCircleIcon } from "./styles";

import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


// const [product, setProduct] = useState([])
// const [fornecedor, setFornecedor] = useState([])

// function getProduct() {
//   try {
//     api.get("/produtos/1")
//     .then( (res) => {
//       console.log(res.data)
//       setProduct(res.data)
//     })
//   } catch (err) {
//     console.log(err.message)
//   }
// }

//  useEffect(() => {getProduct()}, [])


// function getUsersFornecedor() {
//     try {
//       api.get("/usuarios/1")
//       .then( (res) => {
//         console.log(res.data)
//         setProduct(res.data)
//       })
//     } catch (err) {
//       console.log(err.message)
//     }
//   }

//   useEffect(() => {getProduct()}, [])



function LoginAdm() {

    return (
      <div>
        <Header />
          <Container>
            <ContainerFornecedor>
              <Title>Fornecedores</Title>
              <ButtonCadastrar><PlusCircleIcon />Cadastrar novo fornecedor</ButtonCadastrar>
        
              <div>
                <Info>Nome: </Info>
                <Info>Telefone: </Info>
                <Info>Email: </Info>
                <ButtonDiv>
                  <ButtonsType tipo='Editar'/>
                  <ButtonsType tipo='Deletar'/>
                </ButtonDiv>    
              </div>

              <div>
                <Info>Nome: </Info>
                <Info>Telefone: </Info>
                <Info>Email: </Info>
                <ButtonDiv>
                  <ButtonsType tipo='Editar'/>
                  <ButtonsType tipo='Deletar'/>
                </ButtonDiv>    
              </div>
            </ContainerFornecedor>

            <Line />

            <ContainerProduto>
              <Title>Produtos Cadastrados</Title>
              <ButtonCadastrar><PlusCircleIcon /> Cadastrar novo produto</ButtonCadastrar>

              <div>
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
  
  export default LoginAdm