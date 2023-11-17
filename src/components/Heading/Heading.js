'use client';
import styled from 'styled-components';

const HeadingStyled = styled.h1`
  font-size: ${28 / 16}rem;
  font-weight: 700;
`;

function Heading({ children }) {
  return <HeadingStyled>{children}</HeadingStyled>;
}

export default Heading;
