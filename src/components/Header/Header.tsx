import HeaderStyled from "./HeaderStyled";
import Logo from "./logo/logo";
import NavigationLinks from "./navigationLinks/NavigationLinks";
import Whatsapp from "./whatsapp/Whatsapp";

function HeaderPage() {
  return (
    <HeaderStyled>
      <Logo />
      <NavigationLinks/>
      <Whatsapp/>
    </HeaderStyled>
  );
}

export default HeaderPage;