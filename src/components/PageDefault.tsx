import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import HeaderPage from "./Header/Header";
import PageDefaultStyled from "./PageDefaultStyled";

function PageDefault() {

  return (
    <>
    <PageDefaultStyled>
      <HeaderPage />
      <Body/>  
      <Footer data={"Texto"}/>
    </PageDefaultStyled>
    </>
  );
}

export default PageDefault;