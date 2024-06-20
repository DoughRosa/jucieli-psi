import WhatsappStyled from "./WhatsappStyled";
import whatsapp from "../../../assets/Cabeçalho.png"

function Whatsapp (){
    return(
        <WhatsappStyled>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=555199053225">
                <img style={{height: '60px'}} src={whatsapp} alt="" />
            </a>
        </WhatsappStyled>
    )
}

export default Whatsapp;