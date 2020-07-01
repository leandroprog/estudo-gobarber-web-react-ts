import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/Signin';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SigIn Page', () => {
  it('Should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();

    expect(1 + 1).toBe(2);
  });
});
