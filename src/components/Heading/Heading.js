'use client';
import { QUERIES } from '@/lib/constants';
import styled from 'styled-components';

const HeadingStyled = styled.h1`
  font-size: ${32 / 16}rem;
  font-weight: 700;

  line-height: 1;

  ${QUERIES.tabletAndUp} {
    font-size: ${48 / 16}rem;
  }
`;

function Heading({ children, level = 1 }) {
  return <HeadingStyled>{children}</HeadingStyled>;
}

export default Heading;
