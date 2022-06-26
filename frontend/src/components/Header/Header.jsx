
import LinkWrapper from './LinkWrapper';
import { NomeSupermercado, Container,Navegation } from './styled';

const Header = () => {
    return (
        <Container>
    <Navegation>
      
      <LinkWrapper to="/" ><NomeSupermercado>Supermercado SQ</NomeSupermercado></LinkWrapper>
      <ul style={{ listStyleType: "none" }}>
        <li><LinkWrapper to='/buscar'>Buscar</LinkWrapper></li>
        <li><LinkWrapper to='/sobre-nos'>Sobre nós</LinkWrapper></li>
        <li><LinkWrapper to='/alergias'>Alergias Alimentares</LinkWrapper></li>
        <li><LinkWrapper to='/login'>Login</LinkWrapper></li>
      </ul>
      </Navegation>
    </Container>
    );
}
export default Header;