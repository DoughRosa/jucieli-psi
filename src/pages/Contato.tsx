import Main from '../components/Main/Main';
import DivInfos from '../components/Main/divInfos/DivInfos';
import Formulario from '../components/Main/formulario/Formulario';

import PageDefault from '../components/PageDefault';

function Contato() {
  return (
    <>
      <PageDefault>
        <Main>
          <div style={{ backgroundColor: 'white', color: '#665842', margin: '20px' }}>
            <h2>JUCIELI GOMES</h2>
            <h3>Psicologa TCC</h3>
            <DivInfos>
              <p style={{fontWeight: 'bold', marginRight: '5px'}}>Telefone:</p>
              <p>(51) 99999-9999</p>
            </DivInfos>
            <DivInfos>
              <p style={{fontWeight: 'bold', marginRight: '5px'}}>Instagram:</p>
              <p>@jucieligomes.psi</p>
            </DivInfos>
          </div>
          <Formulario />
        </Main>
      </PageDefault>
    </>
  );
}

export default Contato;
