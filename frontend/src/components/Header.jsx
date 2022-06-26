
import LinkWrapper from './LinkWrapper';
import styled from 'styled-components';



const Header = () => {
    return (
        <nav>
    <div>
      <LinkWrapper to="/" >Supermercado SQ</LinkWrapper>
      <ul>
        <li><LinkWrapper to='/buscar'>Buscar</LinkWrapper></li>
        <li><LinkWrapper to='/sobre-nos'>Sobre nós</LinkWrapper></li>
        <li><LinkWrapper to='/alergias'>Alergias Alimentares</LinkWrapper></li>
        <li><LinkWrapper to='/login'>Login</LinkWrapper></li>
      </ul>
    </div>
  </nav>
    );
}
export default Header;