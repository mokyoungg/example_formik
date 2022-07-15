import React, { useCallback } from 'react';
import { Formik } from 'formik';
import * as S from './SignupForm.style';
import TextInput from 'components/TextInput/TextInput';

const initialValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm: React.FC = () => {
  const handleSubmit = useCallback((value) => {
    console.log('value :', value);
  }, []);

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {(formik) => {
        const { values, handleChange, handleSubmit } = formik;

        return (
          <S.FormContainer onSubmit={handleSubmit}>
            <TextInput
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Name"
            />
            <TextInput
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <TextInput
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <TextInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />

            <S.Button type="submit" onClick={() => {}}>
              Submit
            </S.Button>
          </S.FormContainer>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
