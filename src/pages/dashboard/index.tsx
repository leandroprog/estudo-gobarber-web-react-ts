import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointments,
  Section,
  Appointment,
  Calandar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectDate, setSelectDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Amanhã</span>
          </p>
          <NextAppointments>
            <strong>Atendimento amanhã</strong>
            <div>
              <img src={user.avatar_url} alt="test" />
              <strong>Leandro Rocha</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointments>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img src={user.avatar_url} alt="test" />
                <strong>Leandro Rocha</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>
        <Calandar />
      </Content>
    </Container>
  );
};

export default Dashboard;
