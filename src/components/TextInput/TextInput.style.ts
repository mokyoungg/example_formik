import styled from 'styled-components';

const black = '#242427';
const gray = '#505057';
const blue = '#0019f4';

export const Input = styled.input`
  box-sizing: border-box;
  width: 350px;
  height: 30px;
  color: ${black};
  padding: 5px 12px;
  border: 1px solid ${gray};
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  :hover,
  :focus {
    border: 1px solid ${blue};
  }
`;
