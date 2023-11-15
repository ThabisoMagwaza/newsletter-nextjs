"use client";
import Image from "next/image";
import styled from "styled-components";

import Heading from "../Heading";

function Newsletter() {
  return (
    <Wrapper>
      <Image
        width={375}
        height={284}
        src="/assets/images/illustration-sign-up-mobile.svg"
        alt="An ullustration of the company logo"
      />

      <Heading>Stay updated!</Heading>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>

      <label htmlFor="email">Email Address:</label>
      <input id="email" type="email" name="email" />

      <button>Subscribe to monthly newsletter</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

export default Newsletter;
