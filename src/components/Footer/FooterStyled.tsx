import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  color: #fff;
  display: flex;
  width: 100%;
  min-height: 15vh;
  justify-content: space-around;
  align-items: center;
`;

export default FooterStyled;
