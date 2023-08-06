import React from 'react';

import * as S from './Landing.styled';

const Landing = () => {
  return (
    <S.Wrapper>
      <h1>Todo App</h1>
      <S.LinkWrapper>
        <S.StyledLink to='/signin'>로그인</S.StyledLink>
        <S.StyledLink to='/signup'>회원가입</S.StyledLink>
      </S.LinkWrapper>
    </S.Wrapper>
  );
};

export default Landing;
