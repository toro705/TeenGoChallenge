import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput placeholder={props.placeholder} style={{...styles.input, ...props.styleInput}} />
        </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: '#f6f6f6',
    justifyContent: 'center',
    backgroundColor: '#fafafa'
  },
  label: {
    textTransform: 'uppercase',
    color: '#57a4f2',
    fontSize: 10,

  },
  input: {
      height: 'auto',
      fontWeight: '400',
      fontSize: 20
      
  }
});
export default Input;