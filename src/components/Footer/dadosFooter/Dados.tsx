import instagram from '../../../assets/instagram.png';
import whatsapp from '../../../assets/Cabeçalho.png';
import youtube from '../../../assets/youtube.png';
import email from '../../../assets/email.png';

function Dados() {
  return (
    <>
      <div style={{marginLeft: '450px'}}>
        <h3 style={{ color: '#665842' }}>Entre em contato comigo:</h3>
        <p style={{ color: '#665842' }}>Mande sua mensagem, ficarei feliz em atende-los.</p>
      </div>
      <a target='_Blank' href="https://www.instagram.com/jucieligomes.psi">
        <img style={{ height: '50px' }} src={instagram} alt="" />
      </a>
      <a target='_Blank' href="https://api.whatsapp.com/send?phone=555199053225">
        <img style={{ height: '80px' }} src={whatsapp} alt="" />
      </a>
      <a target='_Blank' href="https://www.youtube.com/@JucieliGomes.Psicologa/streams">
        <img style={{ height: '55px' }}  src={youtube} alt="" />
      </a>
      <a target='_Blank' href="mailto: douglasrosaadvocacia@gmail.com">
        <img style={{ height: '50px' }}  src={email} alt="" />
      </a>
    </>
  );
}

export default Dados;
