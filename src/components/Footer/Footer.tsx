import FooterStyled from './FooterStyled';
import Logo from '../Header/logo/logo';
import DadosFooter from './dadosFooter/Dados';

function Footer() {
  return (
    <FooterStyled>
      <Logo/>
      <DadosFooter />
    </FooterStyled>
  );
}

export default Footer;
