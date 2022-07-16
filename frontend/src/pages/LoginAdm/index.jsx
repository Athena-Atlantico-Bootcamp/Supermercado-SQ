import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import ButtonsType from "../../components/Buttons";

import { ButtonCadastrar, ButtonDiv, Container, ContainerProduto, ContainerFornecedor, Title, Line, Info, PlusCircleIcon, InfoName } from "./styles";

import api from "../../service/api";
import { useState, useEffect } from "react";


function LoginAdm() {

  const tokenUser = JSON.parse(localStorage.getItem('@token'));
  const userId = JSON.parse(localStorage.getItem('@usuario'));
  const [product, setProduct] = useState([]);

  console.log(tokenUser);

  async function getProductByUserId() {

    try {
      await api.get(`/produtos/usuario/${userId}`, {headers: {
        "Authorization": `Bearer ${tokenUser}`
      }})
        .then( (res) => {
          console.log(res.data)
          setProduct(res.data)
        })
      } catch (err) {
        console.log(err.message);
      }
    }

    useEffect(() => {getProductByUserId()}, []);
  
  return (
      <div>
        <Header />
          <Container>
            <ContainerFornecedor>
              <Title>Fornecedores</Title>
              <ButtonCadastrar><PlusCircleIcon />Cadastrar novo fornecedor</ButtonCadastrar>

              <div>
                <Info><InfoName>Nome:</InfoName> </Info>
                <Info><InfoName>Telefone:</InfoName> </Info>
                <Info><InfoName>Email:</InfoName> </Info>
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
            
            {product ? product.map((p) => {
              return(
                <div key={p.id_produto}>
                <Info><InfoName>Nome:</InfoName> {p.nome}</Info>
                <Info><InfoName>Descrição:</InfoName> {p.descricao}</Info>
                <Info><InfoName>Ingredientes:</InfoName> {p.ingredientes}</Info>
                <ButtonDiv>
                  <ButtonsType tipo='Editar'/>
                  <ButtonsType tipo='Deletar'/>
                </ButtonDiv>    
              </div>
              )
            }): null }

            </ContainerProduto>
          </Container>
        <Footer />
      </div>
    )
  }
  
  export default LoginAdm