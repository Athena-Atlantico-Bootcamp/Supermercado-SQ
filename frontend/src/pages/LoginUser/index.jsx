import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import ButtonsType from "../../components/Buttons";
import { ButtonCadastrar, ButtonDiv, Container, ContainerProduto, ContainerProdutoDetalhe, ContainerUser, Title, Line, Info, PlusCircleIcon, InfoName } from "./styles";
import { useState, useEffect } from "react";
import api from '../../service/api';


function LoginUser() {

  const tokenUser = JSON.parse(localStorage.getItem('@token'));
  const userId = JSON.parse(localStorage.getItem('@usuario'));
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);
  
  async function getProductByUserId() {

    try {
      await api.get(`/produtos/usuario/${userId}`, {headers: {
        "Authorization": `Bearer ${tokenUser}`
      }})
        .then( (res) => {
          setProduct(res.data)
        })
      } catch (err) {
        console.error(err);
      }
    }

    async function getUserById() {
      try {
        await api.get(`/usuarios/${userId}`, {headers: {
          "Authorization": `Bearer ${tokenUser}`
        }})
          .then( (res) => {
            setUser(res.data)
          })
        } catch (err) {
          console.error(err);
        }
      }
    
    useEffect(() => {getProductByUserId(), getUserById()}, []);    

  return (
    <div>
      <Header />
          <Container>
            <ContainerUser>
              <Title>Meus dados</Title>
              {user ? 
                <div>
                  <Info><InfoName>Nome:</InfoName> {user.nome}</Info>
                  <Info><InfoName>Telefone:</InfoName> {user.telefone}</Info>
                  <Info><InfoName>Email:</InfoName> {user.email}</Info>
                  <Info><InfoName>Restrições:</InfoName> {user.restricoes}</Info>
                  <ButtonDiv>
                    <ButtonsType tipo='Editar' tipoModal='Fornecedor' data={user}/>
                    <ButtonsType tipo='Logout' />
                  </ButtonDiv>    
                </div> : null }
            </ContainerUser>

            <Line />

            <ContainerProduto>
              <Title>Produtos Cadastrados</Title>
              <ButtonsType tipo='Cadastrar Novo Produto' tipoModal='Cadastrar Produtos Modal' />
              
              <ContainerProdutoDetalhe>
                {product ? product.map((p) => {
                return(
                  <div key={p.id_produto}>
                  <Info><InfoName>Nome:</InfoName> {p.nome}</Info>
                  <Info><InfoName>Descrição:</InfoName> {p.descricao}</Info>
                  <Info><InfoName>Ingredientes:</InfoName> {p.ingredientes}</Info>
                  <ButtonDiv>
                    <ButtonsType tipo='Editar' tipoModal='Editar Produtos Modal' data={p}/>
                    <ButtonsType tipo='Deletar' data={p}/>
                  </ButtonDiv>    
                </div>
                )
                }): null }
              </ContainerProdutoDetalhe>
            </ContainerProduto>
          </Container>
        <Footer />

    </div>
  )
}

export default LoginUser