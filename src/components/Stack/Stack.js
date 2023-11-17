'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: var(--orientation);
  gap: var(--gap);
`;

function Stack({ children, orientation = 'column', gap = '10px' }) {
  return (
    <Wrapper
      style={{
        '--orientation': orientation,
        '--gap': gap,
      }}
    >
      {children}
    </Wrapper>
  );
}

export default Stack;
