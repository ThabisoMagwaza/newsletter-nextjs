'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import { COLORS } from '@/lib/constants';
import Stack from '../Stack';
import Button from '../Button';

function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [touched, setTouched] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    const params = new URLSearchParams({
      email,
    }).toString();

    router.push(`/success?${params}`);
  };

  const onChange = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  let valid = true;

  if (!email) {
    valid = false;
  }

  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    valid = false;
  }

  return (
    <Form onSubmit={onSubmit}>
      <Stack gap="14px">
        <InputHeader>
          <Label htmlFor="email">Email Address:</Label>

          {!valid && touched && (
            <ErrorMessage>Valid email required</ErrorMessage>
          )}
        </InputHeader>

        <Input
          valid={valid}
          touched={touched}
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          required
          onChange={onChange}
          onBlur={() => setTouched(true)}
          value={email}
        />
      </Stack>

      <Button disabled={submitting}>Subscribe to monthly newsletter</Button>
    </Form>
  );
}

const ErrorMessage = styled.p`
  color: ${COLORS.Tomato};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label``;

const Input = styled.input`
  color: ${({ valid, touched }) =>
    (!valid && touched && COLORS.Tomato) || 'inherit'};

  height: 54px;
  font-size: 16px;

  padding: 20px 24px;
  border-radius: 8px;

  border: 1px solid
    ${({ valid, touched }) =>
      (!valid && touched && COLORS.Tomato) || COLORS.Grey};

  background: ${({ valid, touched }) =>
    (!valid && touched && 'hsl(4, 100%, 95%)') || COLORS.White};

  &::placeholder {
    font-weight: 700;
    color: ${COLORS.Grey};
  }
`;

const InputHeader = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 12px;
`;

export default SignupForm;
