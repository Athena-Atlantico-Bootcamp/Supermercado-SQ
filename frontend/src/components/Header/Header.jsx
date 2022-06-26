import LinkWrapper from './LinkWrapper';
import { NomeSupermercado, Container, List } from './styles';

const Header = () => {
  return (
    <Container>
      <LinkWrapper to="/" >
        <NomeSupermercado>Supermercado SQ</NomeSupermercado>
      </LinkWrapper>
      {/* <ul style={{ listStyleType: "none" }}>
        <li><LinkWrapper to='/buscar'>Buscar</LinkWrapper></li>
        <li><LinkWrapper to='/sobre-nos'>Sobre nós</LinkWrapper></li>
        <li><LinkWrapper to='/alergias'>Alergias Alimentares</LinkWrapper></li>
        <li><LinkWrapper to='/login'>Login</LinkWrapper></li>
      </ul> */}
      <List>
        <li><LinkWrapper to='/buscar'>Buscar</LinkWrapper></li>
        <li><LinkWrapper to='/sobre-nos'>Sobre nós</LinkWrapper></li>
        <li><LinkWrapper to='/alergias'>Alergias Alimentares</LinkWrapper></li>
        <li><LinkWrapper to='/login'>Login</LinkWrapper></li>
      </List>
    </Container>
  );
}
export default Header;