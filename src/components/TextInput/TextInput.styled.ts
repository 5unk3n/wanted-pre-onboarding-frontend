import { styled } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 700;
`;

interface BottomTextProps {
  $isError: boolean;
}

export const BottomText = styled.p<BottomTextProps>`
  color: ${(props) => (props.$isError ? '#f44336' : '#000')};
  margin: 0;
`;

interface TextFieldProps {
  $isError: boolean;
}

export const TextFiled = styled.input<TextFieldProps>`
  border: none;
  outline: none;
  box-shadow: inset 0 0 0 1px
    ${(props) => (props.$isError ? '#f44336' : '#000')};
  &:focus {
    box-shadow: inset 0 0 0 2px
      ${(props) => (props.$isError ? '#f44336' : '#000')};
  }
  padding: 10px;
  border-radius: 4px;
`;
