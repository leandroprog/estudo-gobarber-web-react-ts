import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';

interface ToastContainerprops {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerprops> = ({ messages }) => {
  const messagesWithTransiction = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    }
  );

  return (
    <Container>
      {messagesWithTransiction.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
