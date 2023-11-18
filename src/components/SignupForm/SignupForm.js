'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { COLORS } from '@/lib/constants';
import Stack from '../Stack';
import Button from '../Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  height: 54px;
  font-size: 16px;

  padding: 20px 24px;
  border-radius: 8px;

  border: 1px solid ${COLORS.Grey};

  &::placeholder {
    font-weight: 700;
    color: ${COLORS.Grey};
  }
`;

function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      email,
    }).toString();

    router.push(`/success?${params}`);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Stack gap="14px">
        <Label htmlFor="email">Email Address:</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
      </Stack>

      <Button>Subscribe to monthly newsletter</Button>
    </Form>
  );
}

export default SignupForm;
