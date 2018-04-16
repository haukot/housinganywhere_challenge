import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui'

let UsernameInput = () => {
  return (
    <Field name="username" component={TextField} label="Username"/>
  )
}

UsernameInput = reduxForm({
  form: 'myForm',
  touchOnChange: true,
})(UsernameInput)

export default UsernameInput;
