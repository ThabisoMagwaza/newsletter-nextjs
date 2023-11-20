'use client';
import Image from 'next/image';
import styled from 'styled-components';
import { useSearchParams, useRouter } from 'next/navigation';

import { COLORS, QUERIES } from '@/lib/constants';
import Heading from '@/components/Heading';
import Button from '@/components/Button';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.White};

  padding: 12vh 24px 40px 24px;

  ${QUERIES.tabletAndUp} {
    max-width: 450px;
    padding: 48px;
    margin: 24px;

    border-radius: 20px;

    height: revert;
  }
`;

const ImageStyled = styled(Image)`
  margin-bottom: 44px;

  ${QUERIES.tabletAndUp} {
    margin-bottom: 32px;
  }
`;

const Paragraph = styled.p`
  margin-top: 32px;
  margin-bottom: 32px;
  flex: 1;
`;

const Emphasize = styled.strong`
  color: ${COLORS.DarkSlateGrey};
  font-weight: 700;
`;

export default function Success() {
  const router = useRouter();
  const params = useSearchParams();

  const email = params.get('email');

  const onClick = () => {
    router.push('/');
  };

  return (
    <Wrapper>
      <ImageStyled
        src="/assets/images/icon-success.svg"
        alt="Success icon"
        width={64}
        height={64}
      />

      <Heading>Thanks for subscribing!</Heading>

      <Paragraph>
        A confirmation email has been sent to <Emphasize>{email}</Emphasize>.
        Please open it and click the button inside to confirm your subscription.
      </Paragraph>

      <Button onClick={onClick}>Dismiss message</Button>
    </Wrapper>
  );
}
