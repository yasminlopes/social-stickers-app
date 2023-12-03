import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  containerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    backgroundColor: '#fff',
  },
  leftIcon: {
    marginRight: 10,
    marginLeft: 10
  },
  button: {
    backgroundColor: '#293A4C',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '95%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  linkText: {
    color: '#293A4C',
    marginTop: 10,
    fontWeight: 'bold',
  }
});