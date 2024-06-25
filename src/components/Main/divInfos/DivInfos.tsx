import React from "react";
import DivInfosStyled from "./DivInfosStyled";

interface DivInfosProps {
    children: React.ReactNode;
}


function DivInfos({children}: DivInfosProps){
    return(
        <DivInfosStyled>
            {children}
        </DivInfosStyled>
    )
}

export default DivInfos;