import * as Yup from 'yup';

export const validPasswordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

export const checkHasValueAndTouched = (value: string, touced: boolean | undefined) => value.length > 0 && touced;

export const checkPasswordLength = (value: string) => value.length >= 8;

export const includeBlankCharRegex = /[\s]/;

export const includeValidCharRegex = /^(?=.*[!@#$%^&*])[\w!@#$%^&*]{1,}$/;

export const signupValidationSchema = Yup.object({
  username: Yup.string().trim().required(' '),
  email: Yup.string().email('Please enter a valid email address').required(' '),
  password: Yup.string().matches(validPasswordRegex, ' ').required(' '),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password do not match')
    .required(' '),
});

export const getLengthValidationName = (password: string, touced: boolean | undefined) => {
  if (checkHasValueAndTouched(password, touced)) {
    if (checkPasswordLength(password)) {
      return 'validation-pass';
    }
    return 'min-charecter-error';
  }

  return 'default';
};

export const getBlankCharValidationName = (password: string, touched: boolean | undefined) => {
  if (checkHasValueAndTouched(password, touched)) {
    if (!includeBlankCharRegex.test(password)) {
      return 'validation-pass';
    }
    return 'blank-charecter-error';
  }

  return 'default';
};

export const getCharValidationName = (password: string, touched: boolean | undefined) => {
  if (checkHasValueAndTouched(password, touched)) {
    if (includeValidCharRegex.test(password)) {
      return 'validation-pass';
    }
    return 'invalid-charecter-error';
  }

  return 'default';
};
