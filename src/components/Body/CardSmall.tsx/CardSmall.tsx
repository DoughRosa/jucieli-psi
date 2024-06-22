import livros from "../../../config/livros";
import CardSmallStyled from "./CardSmallStyled";

function CardSmall() {
    return (
        <CardSmallStyled>
            {livros.map((item) => {
                return (
                    <div style={{padding: '10px'}} key={item.nome}>
                        <img src={item.img} alt={item.nome}/>
                        <div className="cardBody">
                            <h3>{item.nome}</h3>
                        </div>
                    </div>
                )
            })}
        </CardSmallStyled>
    )
};

export default CardSmall;