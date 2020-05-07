import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

// images
import logoImg from '../../assets/logo.svg';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';

// Styles
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <a href="/">Esqueci minha senha</a>
      </form>

      <a href="senha">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
