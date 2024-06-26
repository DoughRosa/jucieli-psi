import styled from "styled-components";

const ContainerStyled = styled.div`
    background-color: white;
    color: ${(props) => props.theme.colors.quartiary};
    width: 65vw;
    margin: 2vh 20vw 3vw;
    padding: 5px;
    display: flex;
    justify-content: center;
`

export default ContainerStyled;