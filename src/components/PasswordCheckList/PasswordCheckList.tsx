import React from 'react';
import { getCharValidationName, getLengthValidationName, getBlankCharValidationName } from 'util/validationSchema';
import * as S from './PasswordCheckList.style';

interface Props {
  value: string;
  isTouched?: boolean;
}

const PasswordCheckList: React.FC<Props> = ({ value, isTouched }) => {
  return (
    <S.PasswordCheckList>
      <S.Notice>Your password must contain:</S.Notice>

      <ul>
        <li className={getCharValidationName(value, isTouched)}>English, number and 1 special character (!@#$%^&*)</li>
        <li className={getLengthValidationName(value, isTouched)}>At least 8 characters</li>
        <li className={getBlankCharValidationName(value, isTouched)}>No blank space</li>
      </ul>
    </S.PasswordCheckList>
  );
};

export default PasswordCheckList;
