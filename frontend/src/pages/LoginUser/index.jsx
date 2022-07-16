import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import ButtonsType from "../../components/Buttons";

import { ButtonCadastrar, ButtonDiv, Container, ContainerProduto, ContainerUser, Title, Line, Info, PlusCircleIcon, InfoName } from "./styles";
import { useState, useEffect } from "react";
import api from '../../service/api';


function LoginUser() {

  const tokenUser = JSON.parse(localStorage.getItem('@token'));
  const userId = JSON.parse(localStorage.getItem('@usuario'));
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

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

    async function getUserById() {
      try {
        await api.get(`/usuarios/${userId}`, {headers: {
          "Authorization": `Bearer ${tokenUser}`
        }})
          .then( (res) => {
            console.log(res.data)
            setUser(res.data)
          })
        } catch (err) {
          console.log(err.message);
        }
      }
    
    useEffect(() => {getProductByUserId(), getUserById()}, []);

  return (
    <div>
      <Header />
          <Container>
            <ContainerUser>
              <Title>Meus dados</Title>
              
              <div>
                <Info><InfoName>Nome:</InfoName> {user.nome}</Info>
                <Info><InfoName>Telefone:</InfoName> {user.telefone}</Info>
                <Info><InfoName>Email:</InfoName> {user.email}</Info>
                <Info><InfoName>Restrições:</InfoName> {user.restincao}</Info>
                <ButtonDiv>
                  <ButtonsType tipo='Editar'/>
                  <ButtonsType tipo='Logout' />
                </ButtonDiv>    
              </div>
            </ContainerUser>

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

export default LoginUser