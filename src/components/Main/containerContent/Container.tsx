import React from "react";
import ContainerStyled from "./ContainerStyled";

interface ContainerProps {
    children: React.ReactNode;
}

function Container({children}: ContainerProps){
    return(
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container;