import React from 'react';
import ReactDOM from 'react-dom/client';
import SignupForm from 'components/SignupForm/SignupForm';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SignupForm />
  </React.StrictMode>,
);
