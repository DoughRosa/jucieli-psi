import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 15vh;
`;

export default HeaderStyled;