import Main from "../components/Main/Main";
import CardSmall from "../components/Main/cardSmall/CardSmall";
import PageDefault from "../components/PageDefault";

function Livros (){
  return(
    <>
      <PageDefault>
        <Main>
          <CardSmall></CardSmall>
        </Main>
      </PageDefault>
    </>
  )
}

export default Livros;