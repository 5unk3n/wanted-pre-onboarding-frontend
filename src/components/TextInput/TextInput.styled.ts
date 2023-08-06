import { css, styled } from 'styled-components';

const allyHidden = css`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LabelProps {
  $isLabelHidden: boolean;
}

export const Label = styled.label<LabelProps>`
  font-weight: 700;
  padding: 5px 0;

  ${({ $isLabelHidden }) => $isLabelHidden && allyHidden}
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
