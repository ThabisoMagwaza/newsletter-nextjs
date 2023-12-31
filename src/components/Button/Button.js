'use client';
import { COLORS } from '@/lib/constants';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  background: var(--background);
  color: ${COLORS.White};
  font-size: 14px;
  font-weight: 700;

  border-radius: 8px;

  padding: 20px;

  outline-offset: 3px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to left,
      hsl(15deg, 100%, 61%),
      hsl(354deg, 100%, 67%)
    );
  }
`;

function Button({ children, disabled = false, ...delegated }) {
  return (
    <Wrapper
      style={{
        '--background': (disabled && COLORS.Charcoal) || COLORS.DarkSlateGrey,
      }}
      disabled={disabled}
      {...delegated}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
