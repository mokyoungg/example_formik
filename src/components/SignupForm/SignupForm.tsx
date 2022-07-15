import React, { useCallback } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as S from './SignupForm.style';
import { signupValidationSchema } from 'util/validationSchema';
import PasswordCheckList from 'components/PasswordCheckList/PasswordCheckList';
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
        const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;

        return (
          <S.FormContainer onSubmit={handleSubmit}>
            <div>
              <TextInput
                id="username"
                name="username"
                value={values.username}
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.username && errors.username ? 'name-error' : undefined}
              />
              <ErrorMessage name="username">{(msg) => <S.FormErrorMessage>{msg}</S.FormErrorMessage>}</ErrorMessage>
            </div>

            <div>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? 'email-error' : undefined}
              />
              <ErrorMessage name="email">{(msg) => <S.FormErrorMessage>{msg}</S.FormErrorMessage>}</ErrorMessage>
            </div>

            <div>
              <TextInput
                id="password"
                name="password"
                type="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.password && errors.password ? 'password-error' : undefined}
              />

              <PasswordCheckList value={values.password} isTouched={touched.password} />

              <ErrorMessage name="password">{(msg) => <S.FormErrorMessage>{msg}</S.FormErrorMessage>}</ErrorMessage>
            </div>

            <div>
              <TextInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.confirmPassword && errors.confirmPassword ? 'confirm-password-error' : undefined}
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
