import styled from 'styled-components';

const black = '#242427';
const blue = '#0019f4';
const red = '#E55D5D';

export const PasswordCheckList = styled.div`
  margin-top: 8px;
  line-height: 20px;
  font-size: 14px;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  li::before {
    content: '• ';
    color: ${black};
  }

  .min-charecter-error,
  .invalid-charecter-error,
  .blank-charecter-error {
    color: ${red};
    ::before {
      content: '• ';
      color: ${red};
    }
  }

  .validation-pass {
    color: ${blue};
    ::before {
      content: '• ';
      color: ${blue};
    }
  }
`;

export const Notice = styled.p`
  font-weight: 500;
`;
