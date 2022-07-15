import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import ButtonsType from "../../components/Buttons";

import { ButtonCadastrar, ButtonDiv, Container, ContainerProduto, ContainerUser, Title, Line, Info, PlusCircleIcon } from "./styles";


function LoginUser() {

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