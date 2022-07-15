import React, { useCallback } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as S from './SignupForm.style';
import { signupValidationSchema } from 'util/validationSchema';
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
    <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={signupValidationSchema}>
      {(formik) => {
        const { values, handleChange, handleSubmit } = formik;

        return (
          <S.FormContainer onSubmit={handleSubmit}>
            <div>
              <TextInput
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Name"
              />
              <ErrorMessage name="username">{(msg) => <S.FormErrorMessage>{msg}</S.FormErrorMessage>}</ErrorMessage>
            </div>

            <div>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <ErrorMessage name="email">{(msg) => <S.FormErrorMessage>{msg}</S.FormErrorMessage>}</ErrorMessage>
            </div>

            <div>
              <TextInput
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <ErrorMessage name="password">{(msg) => <S.FormErrorMessage>{msg}</S.FormErrorMessage>}</ErrorMessage>
            </div>

            <div>
              <TextInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => <S.FormErrorMessage>{msg}</S.FormErrorMessage>}
              </ErrorMessage>
            </div>

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
