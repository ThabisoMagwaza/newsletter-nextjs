'use client';
import styled from 'styled-components';

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
  font-size: 12px;

  padding: 20px 24px;
  border-radius: 8px;

  border: 1px solid ${COLORS.Grey};

  &::placeholder {
    font-weight: 700;
    color: ${COLORS.Grey};
  }
`;

function SignupForm() {
  return (
    <Form>
      <Stack gap="14px">
        <Label htmlFor="email">Email Address:</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="email@company.com"
        />
      </Stack>

      <Button>Subscribe to monthly newsletter</Button>
    </Form>
  );
}

export default SignupForm;
