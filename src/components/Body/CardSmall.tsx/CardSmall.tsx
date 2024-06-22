import livros from "../../../config/livros";
import CardSmallStyled from "./CardSmallStyled";

function CardSmall() {
    return (
        <CardSmallStyled>
            {livros.map((item) => {
                return (
                    <>
                        <img style={{height: '300px'}} src={item.img} alt={item.nome}/>
                        <div className="cardBody">
                            <h3>{item.nome}</h3>
                        </div>
                    </>
                )
            })}
        </CardSmallStyled>
    )
};

export default CardSmall;