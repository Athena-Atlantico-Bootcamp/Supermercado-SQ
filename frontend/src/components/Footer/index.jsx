import { useNavigate } from 'react-router-dom';
import { Container, NomeSupermercado, Texto, Link, ContainerTexto } from './styles'

function Footer() {
  const navigate = useNavigate();

  function paginaQuemSomos() {
    navigate("/sobre-nos");
  }

  function paginaCriarConta() {
    navigate("/login");
  }

  function paginaLogin() {
    navigate("/perfil");
  }

  return (
    <Container>
      <NomeSupermercado>Supermercado SQ</NomeSupermercado>
      <ContainerTexto>
        <Texto>INSTITUCIONAL</Texto>
        <Texto><Link href="" onClick={paginaQuemSomos}>Quem somos</Link></Texto>
      </ContainerTexto>
      <ContainerTexto>
        <Texto>CONTA</Texto>
        <Texto><Link href="paginaCriarConta" onClick={paginaCriarConta}>Criar uma conta</Link></Texto>
        <Texto><Link href="paginaLogin" onClick={paginaLogin}>Minha conta</Link></Texto>
      </ContainerTexto>
      <div>
        <Link href="" onClick={paginaQuemSomos}>
          <Texto>DESENVOLVIDO POR</Texto>
          <Texto>Ada Diniz</Texto>
          <Texto>Beatriz Makowski</Texto>
          <Texto>João Victor Almeida</Texto>
        </Link>
      </div>
      <div>
        <Link href="" onClick={paginaQuemSomos}>
          <Texto>Leonardo Felipe</Texto>
          <Texto>Lucas Cesar</Texto>
          <Texto>Luiza Gadelha</Texto>
          <Texto>Paulo Anderson</Texto>
        </Link>
      </div>
      {/* <button onClick={paginaBuscar}>Ir para página buscar</button> */}
    </Container>
  )
}

export default Footer