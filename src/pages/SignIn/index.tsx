import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Sign in</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Enter</button>
        <a href="forgot">Forgot my password</a>
      </form>

      <a href="sign up">
        <FiLogIn />
        Create an account
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;