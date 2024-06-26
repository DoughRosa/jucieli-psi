import ImagensStyled from "./ImagensStyled";

interface ImagensProps {
    src: string;
}

function Imagens({src}: ImagensProps){
    return(
        <ImagensStyled src={src}></ImagensStyled>
    )
};

export default Imagens;