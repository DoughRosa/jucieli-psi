import tornandoSePais from '../assets/tonando-se-pais.png';
import dezPassos from '../assets/10PassosParaMelhorarOSonoDoBebe.png';
import estrategias from '../assets/estrategiaParaAuxiliarACrianca.png';
import mentira from '../assets/mentira.jpeg';
import juninho from '../assets/maninho.jpeg';
import cama from '../assets/cama.jpeg';

const livros = [
  {
    nome: 'Tornando-se Pais',
    img: tornandoSePais,
    url: 'https://www.vetoreditora.com.br/produto/tornar-se-pais-visitando-pontos-importantes-para-trilhar-esse-caminho-71102',
    texto:
      'O livro "Tornar-se pais" foi desenvolvido para oferecer aos pais, mães, cuidadores e responsáveis por crianças o que há de mais recente e relevante na literatura científica sobre a parentalidade. Este livro não é um manual; é um convite para conhecer e refletir sobre pontos essenciais na relação entre pais e filhos, e entre adultos e crianças. Livro em coautoria com Marina Heinen.',
  },
  {
    nome: '10 Passos Para Melhorar o Sono do Seu Bebê',
    img: dezPassos,
    url: 'https://hotmart.com/pt-br/marketplace/produtos/10-passos-para-melhorar-o-sono-do-seu-bebe/F84949389M',
    texto:
      'Este e-book foi escrito com muito carinho, de uma mãe para outras mães. Quando me tornei mãe, eu não possuía nenhum conhecimento sobre o sono dos bebês. Foi um desafio imenso para mim, até que tive acesso a informações científicas de qualidade e, o que era um grande desafio, se tornou um momento de conexão com minha filha. Pensando no desafio que pode ser o sono dos bebês, reuni neste e-book todas as informações sobre sono infantil que eu gostaria de ter tido acesso e que teriam facilitado muito minha vida. Espero que outras mães possam ter acesso a estas informações e lidar melhor com este momento, afinal, se o bebê não dorme, a mãe também não dorme.',
  },
  {
    nome: 'Estratégias Para Auxiliar a Criança',
    img: estrategias,
    url: 'https://hotmart.com/pt-br/marketplace/produtos/estrategias-para-auxiliar-a-crianca-quando-ela-estiver-passando-a-dormir-no-proprio-quarto/N80063438S',
    texto:
      'Passar o filho da cama compartilhada para o seu próprio quarto pode ser um grande desafio se não conduzido de forma adequada. Pensando nisso, elaborei este material que abrange desde uma boa rotina e higiene do sono, que vão te ajudar a oferecer um ambiente adequado para um sono de qualidade ao seu filho, até um passo a passo para auxiliar seu filho a dormir sozinho de forma leve e divertida.',
  },
  {
    nome: 'Mentira Cabeluda',
    img: mentira,
    url: 'https://www.sinopsyseditora.com.br/livros/mentira-cabeluda--2324',
    texto:
      'Quem nunca contou uma mentira para se livrar de uma encrenca, não é mesmo? Apesar de ser comum que, em algum momento, as crianças utilizem este recurso na infância, seja por medo da punição, receio de desagradar os pais, ou até mesmo por confundirem realidade com imaginação, essa prática preocupa muito as famílias. Pode gerar muitos conflitos e reforçar o comportamento quando não é conduzido de modo adequado. "Mentira Cabeluda" conta a história de quando Juninho conheceu a mentira e como ela transformou a vida dele em uma encrenca. É um excelente recurso para ensinar as crianças sobre as consequências da mentira e como lidar com ela. Indicado para pais, psicólogos e educadores lerem com suas crianças.',
  },
  {
    nome: 'Juninho vai ter um Maninho',
    img: juninho,
    url: 'https://www.sinopsyseditora.com.br/livros/juninho-vai-ter-um-maninho-2938',
    texto:
      'Com a chegada de um novo bebê na família, é normal que o irmão mais velho sinta ciúmes. No entanto, lidar com essa emoção pode não ser um desafio tão grande se os pais estiverem preparados. Desenvolvido para auxiliar as famílias que estão se preparando para a chegada de um irmão mais novo, a história de Juninho aborda diversos desafios enfrentados neste momento e traz recursos para que os pais possam aplicar em sua realidade e lidar melhor com a situação.',
  },
  {
    nome: 'Da Cama Compartilhada ao Meu Próprio Quarto',
    img: cama,
    url: 'https://www.sinopsyseditora.com.br/livros/da-cama-compartilhada-ao-meu-proprio-quarto-3952',
    texto:
      'Em algumas famílias, todos dormem juntos; em outras, cada um dorme no seu quarto. E quando todos dormem juntos e o filhote já está tão grande que não cabe mais na cama dos pais, mas tem medo de dormir sozinho? Este livro é um recurso que inclui atividades para auxiliar nessa transição. Além da história, apresenta um passo a passo para realizar com os pequenos em casa, tornando esse momento de transição mais tranquilo para todos.',
  },
];

export default livros;
