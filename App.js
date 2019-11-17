import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, ThemeProvider, Text} from 'react-native-elements';
import Input from './components/Input';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <KeyboardAvoidingView 
        behavior={'padding'}
        style={styles.appcontainer}>
          <View style={styles.textCenter}>
            <Text style={styles.heading1}>¡Hola Matías!</Text>
            <Text h4 style={styles.textCenter}>Creá un nombre de usuario</Text>
            <Text style={{...styles.paragraph1, ...styles.textCenter}}>Te va a servir para ingresar a la aplicación</Text>
            <Input placeholder="Ingrese su usuario" label="usuario"
              
              />
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Button title="siguiente" />
          </View>
      </KeyboardAvoidingView>
    </ThemeProvider>
  );
}
const theme = {
  Button: {
    containerStyle: {
      borderRadius: 80,
      marginBottom: 20,
      borderRadius: 80,
      overflow: 'hidden',
    },
    buttonStyle: {
      borderRadius: 80,
      padding: 15,
      backgroundColor: '#5f93fd',
    },
    titleStyle: {
      textTransform: 'uppercase',
    },
  },
};
const styles = StyleSheet.create({
  appcontainer: {
    padding: 30,
    paddingTop: 50,
    flex:1, 
    justifyContent: 'space-between',
  },
  heading1: {
    fontSize: 22,
    textAlign: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  paragraph1: {
    color: '#cdcdcd',
    fontSize: 16,
    maxWidth: '80%',
    alignSelf: 'center',
    marginBottom: 30,
  }
});