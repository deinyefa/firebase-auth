import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SimpleForm from './src/SimpleForm';

const reducers = {
  form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
