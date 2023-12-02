import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    padding: 10,
    width: '80%',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderStyle: 'solid',
  },
  button: {
    backgroundColor: '#293A4C',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
