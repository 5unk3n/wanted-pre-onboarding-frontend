import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import { isValidEmail, isValidPassword } from 'utils/validation';
import { signUp } from 'apis/auth';

import * as S from './SignUp.styled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isEmailValid = isValidEmail(email);
  const isPasswordValid = isValidPassword(password);

  const navigate = useNavigate();

  const onSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      <h1>회원가입</h1>
      <S.SignupForm onSubmit={onSignUp} noValidate>
        <TextInput label='이메일' bottomText='@를 포함해 주세요.'>
          <TextInput.TextField
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={email.length > 0 && !isEmailValid}
            data-testid='email-input'
          ></TextInput.TextField>
        </TextInput>
        <TextInput label='비밀번호' bottomText='8자리 이상 입력해주세요.'>
          <TextInput.TextField
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={password.length > 0 && !isPasswordValid}
            data-testid='password-input'
          ></TextInput.TextField>
        </TextInput>
        <Button
          type='submit'
          data-testid='signup-button'
          disabled={!(isEmailValid && isPasswordValid)}
        >
          회원가입
        </Button>
      </S.SignupForm>
    </S.Wrapper>
  );
};

export default SignUp;
