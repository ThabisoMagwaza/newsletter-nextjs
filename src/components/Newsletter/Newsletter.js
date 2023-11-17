'use client';
import Image from 'next/image';
import styled from 'styled-components';

import Heading from '../Heading';
import FeatureList from '../FeatureList';
import Stack from '../Stack';
import SignupForm from '../SignupForm';

function Newsletter() {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageStyled
          width={375}
          height={284}
          src="/assets/images/illustration-sign-up-mobile.svg"
          alt="An ullustration of the company logo"
        />
      </ImageWrapper>

      <Heading>Stay updated!</Heading>

      <SubHeading>
        Join 60,000+ product managers receiving monthly updates on:
      </SubHeading>

      <Stack gap="42px">
        <FeatureList>
          <FeatureList.Feature>
            Product discovery and building what matters
          </FeatureList.Feature>
          <FeatureList.Feature>
            Measuring to ensure updates are a success
          </FeatureList.Feature>
          <FeatureList.Feature>And much more!</FeatureList.Feature>
        </FeatureList>

        <SignupForm />
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding: 24px;
`;

const ImageStyled = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  margin: -24px;
  margin-bottom: 42px;
`;

const SubHeading = styled.p`
  margin-top: 24px;
  margin-bottom: 32px;
`;

export default Newsletter;
