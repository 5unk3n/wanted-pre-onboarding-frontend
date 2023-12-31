import React, { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import Link from 'components/Link/Link';
import { isValidEmail, isValidPassword } from 'utils/validation';
import { singIn } from 'apis/auth';
import { ToastContext } from 'context/ToastContext';
import { getErrorMessage } from 'utils/axios';

import * as S from './SignIn.styled';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isEmailValid = isValidEmail(email);
  const isPasswordValid = isValidPassword(password);

  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  const onSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await singIn(email, password);
      const token = data.access_token;
      localStorage.setItem('token', token);
      navigate('/todo');
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      addToast(errorMessage);
    }
  };

  return (
    <S.Wrapper>
      <h1>로그인</h1>
      <S.SignInForm onSubmit={onSignIn} noValidate>
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
          data-testid='signin-button'
          disabled={!(isEmailValid && isPasswordValid)}
        >
          로그인
        </Button>
        <Link to='/signup'>회원가입</Link>
      </S.SignInForm>
    </S.Wrapper>
  );
};

export default SignIn;
