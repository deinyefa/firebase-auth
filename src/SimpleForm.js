import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text } from 'react-native';

import Input from './Input';

function SimpleForm() {
  <ScrollView keyboardShouldPersistTaps={'handled'}>
    <Text>Email</Text>
    <Field name={'email'} component={Input} />
  </ScrollView>;
}

export default reduxForm({ form: 'signIn' })(SimpleForm);