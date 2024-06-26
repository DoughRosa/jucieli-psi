import styled from "styled-components";
import fundoBranco from "../../assets/fundo-branco.png"

const MainStyled = styled.main`
  background-image: url(${fundoBranco});
  background-repeat: repeat;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  min-height: 70vh;
  width: 100%;
`;

export default MainStyled;