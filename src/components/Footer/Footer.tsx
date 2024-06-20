import React from "react";
import FooterStyled from "./FooterStyled";


interface FooterPageProps {
  data: React.ReactNode;
}

function Footer({ data }: FooterPageProps) {
  return <FooterStyled>{data}</FooterStyled>;
}

export default Footer;