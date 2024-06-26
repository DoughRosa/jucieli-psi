import Main from '../components/Main/Main';
import Container from '../components/Main/containerContent/Container';
import PageDefault from '../components/PageDefault';
import Imagens from '../components/Main/imagens/Imagens';
import fotoBracoCruzado from '../assets/bracoCruzado.png';
import divertidamente from '../assets/divertidamente.png';
import lendoComLili from '../assets/lePraLili.png';
import livrosChao from '../assets/livrosNoChao.png';

function Sobre() {
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
            </div>
            <Imagens src={lendoComLili} />
          </Container>
          <Container>
            <Imagens src={livrosChao} />
            <div>
              <p>
                <span style={{ fontWeight: 'bold', textDecoration: 'underline', marginRight: '5px' }}>
                  "Não sou mãe nem pai, mas quero ser atendida por você".
                </span>
                Será muito bem-vinda(o). Minha formação me capacita para auxiliá-lo(a) em qualquer etapa da vida. Além
                disso, todos nós temos crenças de nossa criação que muitas vezes precisam ser ressignificadas. Para
                saber mais informações ou agendar atendimento comigo, basta clicar no balãozinho do whatsapp à sua direita.
              </p>
              <h3>Essa é a minha formação:</h3>
              <p style={{ marginLeft: '20px' }}>
                - Especialista em Desenvolvimento Infantil Terapia Cognitivo-Comportamental;
                <br />
                <br />
                - Terapia dos Esquemas Terapia da Regulação Infantil (modelo clínico);
                <br />
                <br />
                - Psicologia Perinatal Formação em Sono Infantil;
                <br />
                <br />
              </p>
              <p>
                Atualmente, faço atendimentos online acompanhando mães e famílias em todos os estados do Brasil e também
                de outros países. Agora que você já me conhece, vou explicar como funciona meu trabalho.
              </p>
            </div>
          </Container>
        </Main>
      </PageDefault>
    </>
  );
}

export default Sobre;
