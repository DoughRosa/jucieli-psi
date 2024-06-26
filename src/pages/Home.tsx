import { ChangeEvent, useState } from 'react';
import Main from '../components/Main/Main';
import PageDefault from '../components/PageDefault';
import ButtonSubmit from '../components/Buttons/ButtonSubmit';

function Home() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

  const { name, value } = e.target;

    if (name === 'nome') {
      setNome(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'senha') {
      setSenha(value);
    } else if (name === 'confirmarSenha') {
      setConfirmarSenha(value);
    }
  }

  const handleSubmit = () => {

    if (nome.length === 0 || email.length === 0 || senha.length === 0 || confirmarSenha.length === 0){
      alert("HÁ CAMPOS VAZIOS NO SEU FORMULÁRIO")
    } else if (senha !== confirmarSenha){
      alert("SENHA E CONFIRMAR SENHA PRECISAM SER IGUAIS")
    } else {
      alert("Usuário Cadastrado com Sucesso")
    }
  }

  return (
    <>
      <PageDefault>
        <Main>
        <form
        style={{ backgroundColor: 'white', color: 'black', margin: '20px' }}
      >
        Nome de Usuario: <br />
        <input
          style={{ width: '400px', height: '25px', marginTop: '5px', marginBottom: '5px' }}
          name="nome"
          type="text"
          value={nome}
          onChange={handleChange}
        />
        <br />
        Email: <br />
        <input
          style={{ width: '400px', height: '25px', marginTop: '5px', marginBottom: '5px' }}
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        Senha: <br />
        <input
          style={{ width: '400px', height: '25px', marginTop: '5px', marginBottom: '5px' }}
          name="senha"
          type="text"
          value={senha}
          onChange={handleChange} />
        <br />
        Confirme sua senha: <br />
        <input
          style={{ width: '400px', height: '25px', marginTop: '5px', marginBottom: '5px' }}
          name="confirmarSenha"
          type="text"
          value={confirmarSenha}
          onChange={handleChange} />
        <br />
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <ButtonSubmit action={handleSubmit} label="Cadastrar" />
        </div>
      </form>
        </Main>
      </PageDefault>
    </>
  );
}

export default Home;
