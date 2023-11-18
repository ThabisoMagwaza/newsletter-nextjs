'use client';
import Image from 'next/image';
import styled from 'styled-components';
import { useSearchParams, useRouter } from 'next/navigation';

import { COLORS } from '@/lib/constants';
import Heading from '@/components/Heading';
import Button from '@/components/Button';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 145px 24px 40px 24px;

  border: 1px dotted;
`;

const ImageStyled = styled(Image)`
  margin-bottom: 44px;
`;

const Paragraph = styled.p`
  margin-top: 32px;
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
