import styled from "styled-components";
import fundoBranco from "../../assets/fundo-branco.png"

const BodyStyled = styled.body`
  background-image: url(${fundoBranco});
  background-repeat: repeat;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  min-height: 70vh;
  align-items: center;
`;

export default BodyStyled;