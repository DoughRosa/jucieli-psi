import { ChangeEvent, useState } from 'react';
import ButtonSubmit from '../../Buttons/ButtonSubmit';
import FormularioStyled from './FormularioStyled';

function Formulario() {
  const whatsAppNumero = '+555199053225';
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;

    if (name === 'nome') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'mensagem') {
      setMensagem(value);
    }
  };

  const handleSubmit = () => {
    const whatsUrl =
      'https://api.whatsapp.com/send/?phone=' +
      whatsAppNumero +
      '&text=' +
      'Olá, meu nome é ' +
      name +
      '%0a' +
      'e-mail: ' +
      email +
      '%0a' +
      mensagem +
      '%0a';

      window.open(whatsUrl, '_blank')?.focus();
  };

  return (
    <FormularioStyled>
      <form
        style={{ backgroundColor: 'white', margin: '20px' }}
      >
        Seu Nome: <br />
        <input
          style={{ width: '400px', height: '25px', marginTop: '5px', marginBottom: '5px' }}
          name="nome"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <br />
        Seu Email: <br />
        <input
          style={{ width: '400px', height: '25px', marginTop: '5px', marginBottom: '5px' }}
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        Digite Sua Mensagem: <br />
        <textarea
          style={{ width: '400px', height: '250px', marginTop: '5px', marginBottom: '5px' }}
          name="mensagem"
          value={mensagem}
          onChange={handleChange}
        ></textarea>
        <br />
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <ButtonSubmit action={handleSubmit} label="Enviar" />
        </div>
      </form>
    </FormularioStyled>
  );
}

export default Formulario;
