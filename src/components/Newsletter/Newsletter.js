'use client';
import Image from 'next/image';
import styled from 'styled-components';

import { QUERIES, COLORS } from '@/lib/constants';

import Heading from '../Heading';
import FeatureList from '../FeatureList';
import Stack from '../Stack';
import SignupForm from '../SignupForm';

function Newsletter() {
  return (
    <Wrapper>
      <ImageWrapper>
        <MobileImage
          width={375}
          height={284}
          src="/assets/images/illustration-sign-up-mobile.svg"
          alt="An illustration of the company logo"
        />
        <DesktopImage
          src="/assets/images/illustration-sign-up-desktop.svg"
          alt="An illustration of the company logo"
          width={400}
          height={593}
        />
      </ImageWrapper>

      <Content>
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
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100%;
  padding: 24px;
  background: ${COLORS.White};

  ${QUERIES.tabletAndUp} {
    height: auto;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    border-radius: 20px;
    margin: 24px;
    padding: 20px;
    gap: 48px;
  }
`;

const Content = styled.div`
  ${QUERIES.tabletAndUp} {
    margin-left: 24px;
    max-width: 400px;
  }
`;

const ImageStyled = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 100% 0;
`;

const MobileImage = styled(ImageStyled)`
  ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const DesktopImage = styled(ImageStyled)`
  display: none;

  ${QUERIES.tabletAndUp} {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  margin: -24px;
  margin-bottom: 42px;

  ${QUERIES.tabletAndUp} {
    margin: 0;
    align-self: stretch;

    border-radius: 10px;
    overflow: hidden;
  }
`;

const SubHeading = styled.p`
  margin-top: 24px;
  margin-bottom: 32px;
`;

export default Newsletter;
