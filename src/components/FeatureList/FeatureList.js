'use client';
import Image from 'next/image';
import styled from 'styled-components';

const FeatureStyled = styled.li`
  display: flex;
  gap: 16px;
`;

const Features = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function FeatureList({ children }) {
  return <Features>{children}</Features>;
}

function Feature({ children }) {
  return (
    <FeatureStyled>
      <Image
        src="/assets/images/icon-list.svg"
        alt="A checkmark icon"
        width={21}
        height={21}
      />
      {children}
    </FeatureStyled>
  );
}

FeatureList.Feature = Feature;

export default FeatureList;
