import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

// Hooks
import { useToast } from '../../hooks/toast';

// Utils
import getValidationErrors from '../../utils/getValidationErrors';

// images
import logoImg from '../../assets/logo.svg';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';

// Styles
import { Container, Content, Background, AnimationContainer } from './styles';

interface ForgotPasswordFormData {
  email: string;
  password: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors([]);
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });
        await schema.validate(data, { abortEarly: false });

        // Recuperação de senha

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const erros = getValidationErrors(error);
          formRef.current?.setErrors(erros);
          return;
        }
        addToast({
          type: 'error',
          title: 'Error na recuperação de senha',
          description:
            'Ocorreu um erro tentar a recuperação de senha, tente novamente.',
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Button type="submit">Recuperar</Button>
          </Form>
          <Link to="signin">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
