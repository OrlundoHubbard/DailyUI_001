import styled from "styled-components";
import { Checkbox } from "@nextui-org/react";

export default function Home() {
  return (
    <SignInPageWrapper>
      <WelcomeBackSection>
        <WelcomeBackText>Welcome Back</WelcomeBackText>
        <WelcomeBackSubHeading>
          Welcome back! Please enter your details.
        </WelcomeBackSubHeading>
        <WelcomeBackFormGroup>
          <WelcomeBackFormLabel htmlFor="label">Email</WelcomeBackFormLabel>
          <WelcomeBackInput id="label" placeholder="Enter your email" />
          <WelcomeBackFormLabel htmlFor="label">Password</WelcomeBackFormLabel>
          <WelcomeBackInput id="label" placeholder="Enter your password" />
        </WelcomeBackFormGroup>
        <RememberMeDiv>
          <Checkbox />
          <RememberMeText>Remember me for 30 days</RememberMeText>
          <RememberMeText>Forgot Password</RememberMeText>
        </RememberMeDiv>
      </WelcomeBackSection>
    </SignInPageWrapper>
  );
}

const SignInPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1700px;
`;

const WelcomeBackSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const WelcomeBackText = styled.h1`
  text-align: center;
`;

const WelcomeBackSubHeading = styled.h4`
  text-align: center;
`;

const WelcomeBackFormGroup = styled.form`
  width: 100%;
`;

const WelcomeBackFormLabel = styled.label``;

const WelcomeBackInput = styled.input`
  padding: 0.5em;
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 1rem 0;
  /* outline: none; */
  display: block;
  background-color: white;
`;

const RememberMeDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RememberMeText = styled.h4`
  font-size: 12px;
  color: grey;
  padding-left: 1rem;
`;
