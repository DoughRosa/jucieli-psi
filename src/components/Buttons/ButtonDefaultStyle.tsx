import styled from "styled-components";

const ButtonDefaultStyled = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    height: 40px;
    border: none;
    color: ${(props) => props.theme.colors.quartiary};
    text-decoration: underline;
    font-weight: bolder;
    border-radius: 10px;
`;

export default ButtonDefaultStyled;