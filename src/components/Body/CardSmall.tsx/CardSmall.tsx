import livros from '../../../config/livros';
import ButtonDefault from '../../Buttons/ButtonDefault';
import CardSmallStyled from './CardSmallStyled';

function CardSmall() {
  return (
    <CardSmallStyled>
      {livros.map(item => {
        return (
        <div>
          <div style={{ display: 'flex', padding: '20px', width: '1000px' }}>
            <img style={{ height: '250px', margin: '10px 50px 40px 100px' }} src={item.img} alt={item.nome} />
            <div className="cardBody">
              <h1 style={{ color: '#665842', marginBottom: '10px', textDecoration: 'underline' }}>{item.nome}</h1>
              <p style={{ color: '#665842', backgroundColor: 'white', padding: '10px' }}>
                {item.texto}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center'}}>
                <a target="_Blank" href={item.url}>
                  <ButtonDefault label="Clique Aqui Para Adquirir"></ButtonDefault>
                </a>
              </div>
            </div>
          </div>
          <div style={{height: '2px', width: '900px', margin: '0px 120px' , backgroundColor: '#a88dab'}}></div>
        </div>
        );
      })}
    </CardSmallStyled>
  );
}

export default CardSmall;
