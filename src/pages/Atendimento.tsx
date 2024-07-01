import Main from '../components/Main/Main';
import Container from '../components/Main/containerContent/Container';
import Imagens from '../components/Main/imagens/Imagens';
import PageDefault from '../components/PageDefault';
import divertidamente from '../assets/divertidamente.png';
import lendoComLili from '../assets/lePraLili.png';

function Atendimento() {
  return (
    <>
      <PageDefault>
        <Main>
          <Container>
            <Imagens src={divertidamente} />
            <div>
              <h3>Sou Psicóloga:</h3>
              <p>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline', marginRight: '5px' }}>Para MÃES:</span>
                Desde a gestação, para que possam lidar com suas emoções e se preparar para os futuros desafios da
                maternidade. Tenho um amor especial por acompanhar "mães em formação", mães de crianças pequenas que
                precisam se sentir compreendidas e validadas nesse momento tão vulnerável e desafiador. Mães que têm
                dificuldade com o sono do bebê, que sentem medo de voltar ao trabalho, que querem ter mais paciência,
                que querem oferecer educação emocional ao seu filho e ter apoio para lidar com qualquer desafio
                (desfralde, amamentação, adaptação escolar), ou mesmo querem um espaço para si, com escuta atenta de
                quem compreende os desafios e pode ser apoio.
              </p>
              <p>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline', marginRight: '5px' }}>
                  Para CRIANÇAS e suas FAMÍLIAS:
                </span>
                Atendo crianças presencialmente na cidade de Guaíba. Atendo crianças e suas famílias, porque vejo os
                pais como meus multiplicadores. Ao atender crianças, atuo sempre também com os pais, orientando e
                oferecendo ferramentas para lidarem com os desafios fora do ambiente de terapia, com a criança. Assim, a
                evolução se torna mais eficaz e contínua.
              </p>
            </div>
          </Container>
          <Container>
            <div>
              <p>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline', marginRight: '5px' }}>
                  Sou 'psi' de outras 'psis' e de pediatras:
                </span>
                Hoje, muitas das minhas pacientes são psicólogas mães que buscam lidar com os desafios da maternidade de
                forma leve (se é que isso é possível) e prática, como eu e pediatras, que buscam conhecer mais sobre
                parentalidade para oferecer uma atuação mais acolhedora às mães e famílias que acompanham. Afinal,
                muitas vezes, é o pediatra quem percebe os primeiros sinais da necessidade de apoio emocional da mãe ou
                até mesmo, oferece ferramentas para que ela lide melhor com as emoções da criança.
              </p>
              <h3>Sou orientadora parental:</h3>
              <p>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline', marginRight: '5px' }}>
                  Para FAMÍLIAS:
                </span>
                Casais, pais, mães, educadores e babás que precisam de apoio com o comportamento das crianças, que
                desejam entender mais sobre a formação da personalidade delas e sobre o desenvolvimento saudável. Pais
                que lidam com desafios comportamentais como raiva, birras e até mesmo transtornos emocionais, para que
                saibam como lidar com seus pequenos de maneira saudável, fortalecendo o vínculo familiar ou o ambiente
                para a criança aprender a se regular e ter um comportamento mais adequado.
              </p>
              <p>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline', marginRight: '5px' }}>
                  "Não sou mãe nem pai, mas quero ser atendida por você!"
                </span>
                <br />
                Será muito bem-vinda(o). Minha formação me capacita para auxiliá-lo(a) em qualquer etapa da vida. Além
                disso, todos nós temos crenças de nossa criação que muitas vezes precisam ser ressignificadas. Para
                saber mais informações ou agendar atendimento comigo, basta clicar no balãozinho do whatsapp à sua
                direita.
              </p>
            </div>
            <Imagens src={lendoComLili} />
          </Container>
        </Main>
      </PageDefault>
    </>
  );
}

export default Atendimento;
