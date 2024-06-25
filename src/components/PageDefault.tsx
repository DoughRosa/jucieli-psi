import React from "react";
import Footer from "./Footer/Footer";
import HeaderPage from "./Header/Header";
import PageDefaultStyled from "./PageDefaultStyled";
import Body from "./Main/Main";

interface PageDefaultProps{
  children: React.ReactNode;
}

function PageDefault({children}: PageDefaultProps) {

  return (
    <>
    <PageDefaultStyled>
      <HeaderPage />
      <Body>
        {children}
      </Body>
      <Footer />
    </PageDefaultStyled>
    </>
  );
}

export default PageDefault;