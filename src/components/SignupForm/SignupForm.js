'use client';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function SignupForm() {
  return (
    <Form>
      <label htmlFor="email">Email Address:</label>
      <input id="email" type="email" name="email" />

      <button>Subscribe to monthly newsletter</button>
    </Form>
  );
}

export default SignupForm;
