import Main from '../components/Main/Main';
import Container from '../components/Main/containerContent/Container';
import PageDefault from '../components/PageDefault';
import Imagens from '../components/Main/imagens/Imagens';
import fotoBracoCruzado from '../assets/bracoCruzado.png';
import livrosChao from '../assets/livrosNoChao.png';
import ButtonDefault from '../components/Buttons/ButtonDefault';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function Sobre() {
  const navigate: NavigateFunction = useNavigate();

  function goToAtendimento() {
    navigate('/atendimento');
  }

  return (
    <>
      <PageDefault>
        <Main>
          <Container>
            <div>
              <h2>Olá, eu me chamo Jucieli, mas pode me chamar de Ju.</h2>
              <p>
                Sou psicóloga (CRP 07-27005), orientadora parental e escritora. Meu maior sonho é que nossas crianças
                possam crescer em um ambiente seguro, onde suas emoções sejam validadas, seu jeito de ser seja visto de
                modo positivo para que cresçam com uma autoestima saudável e um bom senso de si. Que os pais e adultos
                da vida de cada criança entendam seu papel de oferecer à criança direcionamento (limites) dentro da
                capacidade de desenvolvimento dela e do seu cérebro, dando exemplo e assim, promovendo saúde emocional à
                ela para a vida toda.
                <br />
                <br />
                Meu foco é a PROMOÇÃO e PREVENÇÃO em SAÚDE EMOCIONAL das mães, famílias e consequentemente, das suas
                crianças.
                <br />
                <br />
                Afinal, "A infância é um chão que se pisa a vida toda", e nós, pais, temos um papel muito importante
                neste "chão". Porém, para isso, muitas vezes precisamos de apoio, ressignificando as dores da criação
                que tivemos, desenvolvendo formas mais assertivas de lidar com os desafios, nossa própria regulação
                emocional, já que a maioria de nós não aprendeu isso ao longo da infância, e conhecendo mais sobre
                desenvolvimento infantil e os diferentes desafios de tornar-se mãe e pai.
              </p>
            </div>
            <Imagens src={fotoBracoCruzado} />
          </Container>

          <Container>
            <Imagens src={livrosChao} />
            <div>
              <h3>Essa é a minha formação:</h3>
              <p style={{ marginLeft: '20px' }}>
                - Especialista em Desenvolvimento Infantil;
                <br />
                <br />
                - Terapeuta Cognitivo-Comportamental;
                <br />
                <br />
                - Terapeuta dos Esquemas;
                <br />
                <br />
                - Terapeuta da Regulação Infantil (modelo clínico);
                <br />
                <br />
                - Psicologia Perinatal;
                <br />
                <br />- Com Formação em Sono Infantil;
              </p>
              <p>
                Atualmente, faço atendimentos online acompanhando mães e famílias em todos os estados do Brasil e também
                de outros países. Agora que você já me conhece, vou explicar como funciona meu trabalho.
              </p>
              <h3>Quer saber mais sobre os atendimentos?"</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <ButtonDefault label="Clique Aqui" action={goToAtendimento} />
              </div>
            </div>
          </Container>
        </Main>
      </PageDefault>
    </>
  );
}

export default Sobre;
