import React, { ChangeEventHandler, FocusEventHandler, InputHTMLAttributes } from 'react';
import * as S from './TextInput.style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({
  type = 'text',
  value,
  placeholder = '',
  onChange,
  onBlur,
  className,
  ...restProps
}) => {
  return (
    <S.Input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      autoComplete="off"
      {...restProps}
    />
  );
};

export default TextInput;
