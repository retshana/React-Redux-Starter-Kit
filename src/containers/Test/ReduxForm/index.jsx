import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">
          First Name
          <Field name="firstName" component="input" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name
          <Field name="lastName" component="input" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <Field name="email" component="input" type="email" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'contact',
})(ContactForm);
