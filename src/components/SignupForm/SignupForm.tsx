import React from 'react';
import { Formik } from 'formik';
import * as S from './SignupForm.style';

const initialValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm: React.FC = () => {
  return (
    <Formik initialValues={initialValue} onSubmit={() => {}}>
      {(formik) => {
        const { values } = formik;

        return (
          <S.FormContainer>
            <input value={values.username} />
            <input value={values.email} />
            <input value={values.password} />
            <input value={values.confirmPassword} />
          </S.FormContainer>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
