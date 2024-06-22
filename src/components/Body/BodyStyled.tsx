import styled from "styled-components";
import fundo from "../../assets/fundo-rosa.png"

const BodyStyled = styled.body`
  background-image: url(${fundo});
  background-repeat: repeat;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  height: 100%;
  align-items: center;
`;

export default BodyStyled;