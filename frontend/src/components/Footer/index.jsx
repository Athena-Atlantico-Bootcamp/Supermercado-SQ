import { useNavigate } from 'react-router-dom';
import { Container, NomeSupermercado, Texto, Link, ContainerTexto } from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  const navigate = useNavigate();

  function paginaHome() {
    navigate("/");
  }

  function paginaQuemSomos() {
    navigate("/sobre-nos");
  }

  function paginaCriarConta() {
    navigate("/login");
  }

  function paginaLogin() {
    const tipoUsuario = JSON.parse(localStorage.getItem('@tipo_usuario'))
    console.log('tipo ',tipoUsuario)
    console.log(tipoUsuario == 'usuario')
    if(tipoUsuario == 'usuario' || tipoUsuario == 'fornecedor'){
      navigate("/perfil");
    } else if (tipoUsuario){
      navigate("/perfil-adm");
    } else {
      navigate("/login");
    }
  }

  return (
    <Container>
      <ToastContainer />
      <NomeSupermercado><Link href="" onClick={paginaQuemSomos}>Supermercado SQ</Link></NomeSupermercado>
      <ContainerTexto>
        <Texto>INSTITUCIONAL</Texto>
        <Texto><Link href="" onClick={paginaQuemSomos}>Quem somos</Link></Texto>
      </ContainerTexto>
      <ContainerTexto>
        <Texto>CONTA</Texto>
        <Texto><Link href="" onClick={paginaCriarConta}>Criar uma conta</Link></Texto>
        <Texto><Link href="" onClick={paginaLogin}>Minha conta</Link></Texto>
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
    </Container>
  )
}

export default Footer