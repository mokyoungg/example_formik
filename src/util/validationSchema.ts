import * as Yup from 'yup';

export const validPasswordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

export const signupValidationSchema = Yup.object({
  username: Yup.string().trim().required('required'),
  email: Yup.string().email('Please enter a valid email address').required('required'),
  password: Yup.string().matches(validPasswordRegex, ' ').required('required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password do not match')
    .required('required'),
});
