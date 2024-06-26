import Main from '../components/Main/Main';
import CardSmall from '../components/Main/cardSmall/CardSmall';
import Container from '../components/Main/containerContent/Container';
import PageDefault from '../components/PageDefault';

function Livros() {
  return (
    <>
      <PageDefault>
        <Main>
          <Container>
            <CardSmall></CardSmall>
          </Container>
        </Main>
      </PageDefault>
    </>
  );
}

export default Livros;
