import styled from "styled-components";

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
          <WelcomeBackInput id="label" />
        </WelcomeBackFormGroup>
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
  /* outline: none; */
  display: block;
  background-color: white; ;
`;
