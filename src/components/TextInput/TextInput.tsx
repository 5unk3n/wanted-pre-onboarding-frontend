import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
} from 'react';

import * as S from './TextInput.styled';

interface TextInputProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
  label?: string;
  bottomText?: string;
}

const TextInput = ({
  label,
  bottomText,
  children,
  ...props
}: TextInputProps) => {
  const child = Children.only(children);
  const id = child.props.id || label?.toLowerCase().replace(/\s/g, '-');
  const isError: boolean = child.props.error;

  return (
    <S.InputWrapper {...props}>
      <S.Label htmlFor={id}>{label}</S.Label>
      {cloneElement(child, { id, ...child.props })}
      {bottomText && (
        <S.BottomText $isError={isError}>{bottomText}</S.BottomText>
      )}
    </S.InputWrapper>
  );
};

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const TextField = forwardRef(
  (
    { error, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return <S.TextFiled $isError={error || false} ref={ref} {...props} />;
  }
);

TextField.displayName = 'TextField';
TextInput.TextField = TextField;

export default TextInput;
