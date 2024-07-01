import Main from '../components/Main/Main';
import PageDefault from '../components/PageDefault';
import Container from '../components/Main/containerContent/Container';
import DivInfos from '../components/Main/divInfos/DivInfos';
import ButtonDefault from '../components/Buttons/ButtonDefault';
import Imagens from '../components/Main/imagens/Imagens';
import fotoComLili from '../assets/beijoLili.png';
import lendo from '../assets/lendo.png';
import lendoLivros from '../assets/lendoLivros.jpg';
import aponta from '../assets/mostra.png';
import beijinho from '../assets/beijinho.jpg';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function Home() {
  const navigate: NavigateFunction = useNavigate();

  function goToSobre() {
    navigate('/sobre');
  }

  function goToAtendimento() {
    navigate('/atendimento');
  }

  function goToLivros() {
    navigate('/livros');
  }

  function goToInstragram() {
    navigate('/instagram')
  }

  function goToContato() {
    navigate('/contato');
  }

  return (
    <>
      <PageDefault>
        <Main>
          <Container>
            <div>
              <h1>
                Olá, me chamo Jucieli Gomes, <br />
                mas pode me chamar de Ju.
              </h1>
              <h3>Sou psicóloga (CRP 07-27005), orientadora parental e escritora</h3>
              <DivInfos>
                <p style={{ fontWeight: 'bold', marginRight: '5px' }}>Telefone:</p>
                <p>(51) 99905-3225</p>
              </DivInfos>
              <DivInfos>
                <p style={{ fontWeight: 'bold', marginRight: '5px' }}>Instagram:</p>
                <p>@jucieligomes.psi</p>
              </DivInfos>
              <h3>Quer me conhecer melhor?</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <ButtonDefault label="Clique aqui" action={goToSobre} />
              </div>
            </div>
            <Imagens src={fotoComLili} />
          </Container>
          <Container>
            <Imagens src={lendo} />
            <div>
              <h1>Faço atendimentos online e presenciais.</h1>
              <h3>Atendo presencialmente na cidade de Guaíba/RS, e online em qualquer lugar do mundo.</h3>
              <DivInfos>
                <p style={{ fontWeight: 'bold', marginRight: '5px' }}></p>
                <p>
                  Meu principal foco de trabalho são os adultos, pois entendo que para que possamos ensinar nossos
                  filhos a regularem suas emoções antes nós precisamos saber e praticar para dar o exemplo, além de
                  falar como devem agir.
                </p>
              </DivInfos>
              <DivInfos>
                <p style={{ fontWeight: 'bold', marginRight: '5px' }}>
                  Atendo crianças também, até 10 anos preferencialmente de modo presencial, pós esta idade o atendimento
                  de crianças pode ser feito de modo online também.
                </p>
                <p></p>
              </DivInfos>
              <h3>Quer saber mais sobre os atendimentos?"</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <ButtonDefault label="Clique Aqui" action={goToAtendimento} />
              </div>
            </div>
          </Container>
          <Container>
            <div>
              <h1>Também sou escritora.</h1>
              <h3>Tenho diversos livros infantís e de orientação parental.</h3>
              <DivInfos>
                <p>
                  Estes livros tem por objetivo ajudar os pais a entender como lidar certas situações com seus pequenos,
                  tal qual como lidar com as primeiras mentiras, com a chegada de um novo filho, como lidar e ajuda-los
                  a ter um sono melhor e regular suas emoções.
                </p>
              </DivInfos>
              <h3>Quer me conhecer meus livros?</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <ButtonDefault label="Clique aqui" action={goToLivros} />
              </div>
            </div>
            <Imagens src={lendoLivros} />
          </Container>
          <Container>
            <Imagens src={aponta} />
            <div>
              <h1>No meu instagram crio muitos conteúdos de orientação parental.</h1>
              <DivInfos>
                <p style={{ fontWeight: 'bold', marginRight: '5px' }}>Instagram:</p>
                <p>@jucieligomes.psi</p>
              </DivInfos>
              <h3>Tem muitos conteúdos essenciais, sobre emoções, sono, desfralde, maternidade.</h3>
              <p>
                Meu objetivo é ser apoio e trazer conhecimento para o maior número de famílias possível para que
                possamos conhecer mais o desenvolvimento das nossas crianças e educar com limites realistas, me
                acompanhe lá para ver os conteúdos diariamente.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <ButtonDefault label="Clique Aqui" action={goToInstragram} />
              </div>
            </div>
          </Container>
          <Container>
            <div>
              <h1>Se você, deseja ser atendida(o) por mim?</h1>
              <h3>Mande uma mensagem com seu nome e e-mail que retornarei assim que possível.</h3>
              <DivInfos>
                <p>clique no botão abaixo para me mandar uma mensagem.</p>
              </DivInfos>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <ButtonDefault label="Clique aqui" action={goToContato} />
              </div>
            </div>
            <Imagens src={beijinho} />
          </Container>
        </Main>
      </PageDefault>
    </>
  );
}

export default Home;
