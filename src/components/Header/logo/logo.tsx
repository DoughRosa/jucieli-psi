import LogoStyled from "./logoStyled";
import logo from "../../../assets/logo.png"

function Logo (){
    return(
        <LogoStyled>
            <img style={{height: '280px'}} src={logo} alt="" />
        </LogoStyled>
    )
}

export default Logo;