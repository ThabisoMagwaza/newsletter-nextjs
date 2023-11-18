'use client';
import styled from 'styled-components';
import Newsletter from '@/components/Newsletter';

const Wrapper = styled.main`
  height: 100%;
  padding: 24px;
`;

export default function Home() {
  return (
    <Wrapper>
      <Newsletter />
    </Wrapper>
  );
}
