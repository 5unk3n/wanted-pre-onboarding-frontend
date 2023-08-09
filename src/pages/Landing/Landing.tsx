import React from 'react';

import Link from 'components/Link/Link';

import * as S from './Landing.styled';

const Landing = () => {
  return (
    <S.Wrapper>
      <h1>Todo App</h1>
      <S.LinkWrapper>
        <Link to='/signin'>로그인</Link>
        <Link to='/signup'>회원가입</Link>
      </S.LinkWrapper>
    </S.Wrapper>
  );
};

export default Landing;
