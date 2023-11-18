'use client';
import styled from 'styled-components';

const sizes = {
  1: 34,
  2: 28,
};

const HeadingStyled = styled.h1`
  font-size: ${({ size }) => size / 16}rem;
  font-weight: 700;
`;

function Heading({ children, level = 1 }) {
  return <HeadingStyled size={sizes[level]}>{children}</HeadingStyled>;
}

export default Heading;
