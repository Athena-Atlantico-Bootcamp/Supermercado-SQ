import { useNavigate } from 'react-router-dom';
import { Container, NomeSupermercado, Texto, Link, ContainerTexto } from './styles'
import LinkWrapper from '../Header/LinkWrapper';

function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <NomeSupermercado><LinkWrapper to="/" >Supermercado SQ</LinkWrapper></NomeSupermercado>
      <ContainerTexto>
        <Texto>INSTITUCIONAL</Texto>
        <Texto><LinkWrapper to="/sobre-nos">Quem somos</LinkWrapper></Texto>
      </ContainerTexto>
      <ContainerTexto>
        <Texto>CONTA</Texto>
        <Texto><LinkWrapper to="/login">Criar uma conta</LinkWrapper></Texto>
        <Texto><LinkWrapper to="/perfil">Minha conta</LinkWrapper></Texto>
      </ContainerTexto>
      <div>
        <LinkWrapper to="/sobre-nos">
          <Texto>DESENVOLVIDO POR</Texto>
          <Texto>Ada Diniz</Texto>
          <Texto>Beatriz Makowski</Texto>
          <Texto>João Victor Almeida</Texto>
        </LinkWrapper>
      </div>
      <div>
        <LinkWrapper to="/sobre-nos">
          <Texto>Leonardo Felipe</Texto>
          <Texto>Lucas Cesar</Texto>
          <Texto>Luiza Gadelha</Texto>
          <Texto>Paulo Anderson</Texto>
        </LinkWrapper>
      </div>
    </Container>
  )
}

export default Footer