import styled from 'styled-components';

const black = '#242427';
const red = '#E55D5D';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .name-error,
  .email-error,
  .password-error,
  .confirm-password-error {
    border-color: ${red};
  }
`;

export const Button = styled.button`
  width: 350px;
  height: 30px;
  padding: 5px 12px;
  font-size: 14px;
  background-color: #fff;
  color: ${black};
  outline: none;
  border: 1px solid ${black};
  border-radius: 4px;
  cursor: pointer;
`;

export const FormErrorMessage = styled.p`
  color: ${red};
  font-size: 14px;
  margin: 0;
`;
