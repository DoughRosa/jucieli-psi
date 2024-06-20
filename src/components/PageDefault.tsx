import React from "react";
import Footer from "./Footer/Footer";
import HeaderPage from "./Header/Header";
import PageDefaultStyled from "./PageDefaultStyled";

interface PageDefaultProps{
  children: React.ReactNode;
}

function PageDefault({children}: PageDefaultProps) {

  return (
    <>
    <PageDefaultStyled>
      <HeaderPage />
      {children}
      <Footer data={"Texto"}/>
    </PageDefaultStyled>
    </>
  );
}

export default PageDefault;