'use client';
import { COLORS } from '@/lib/constants';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  background: ${COLORS.DarkSlateGrey};
  color: ${COLORS.White};
  font-size: 14px;
  font-weight: 700;

  border-radius: 8px;

  padding: 20px;

  outline-offset: 3px;
`;

function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Button;
