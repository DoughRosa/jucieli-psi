import styled from "styled-components";

const WhatsappStyled = styled.div`
    background-color: ${(props) => props.theme.colors.secondary};
    position: fixed;
    right: 65px;
    border: solid 1px;
    border-color: ${(props) => props.theme.colors.terciary};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 65px;
`;

export default WhatsappStyled;