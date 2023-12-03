import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input } from 'react-native-elements';
import RegisterImage from '../../../../../assets/illustrations/register.svg';
import { styles } from './RegisterUserStyles';
import { useRegisterUser } from '../hooks/useRegisterUser';

export default function RegisterUserScreen({ navigation }) {
  const {
    name,
    setName,
    lastName,
    setLastName,
    email,
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    emailError,
    registerUser,
    handleEmailChange,
  } = useRegisterUser(navigation);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}
      >
        <View
          style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}
        >
          <RegisterImage width={250} height={250} />
          <Text style={styles.containerText}>Cadastrar-se</Text>
        </View>
        <Input
          inputContainerStyle={styles.input}
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'user', color: '#293A4C' }}
          leftIconContainerStyle={styles.leftIcon}
          value={name}
          onChangeText={setName}
        />
        <Input
          inputContainerStyle={styles.input}
          leftIconContainerStyle={styles.leftIcon}
          placeholder="Sobrenome"
          leftIcon={{ type: 'font-awesome', name: 'user', color: '#293A4C' }}
          value={lastName}
          onChangeText={setLastName}
        />
        <Input
          inputContainerStyle={styles.input}
          leftIconContainerStyle={styles.leftIcon}
          placeholder="Email"
          leftIcon={{
            type: 'font-awesome',
            name: 'envelope',
            color: '#293A4C',
          }}
          value={email}
          onChangeText={handleEmailChange}
          errorMessage={emailError}
        />
        <Input
          leftIconContainerStyle={styles.leftIcon}
          inputContainerStyle={styles.input}
          placeholder="Nome de usuário"
          leftIcon={{ type: 'font-awesome', name: 'at', color: '#293A4C' }}
          value={username}
          onChangeText={setUsername}
        />
        <Input
          inputContainerStyle={styles.input}
          leftIconContainerStyle={styles.leftIcon}
          placeholder="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock', color: '#293A4C' }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={registerUser}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Cadastrar-se</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.linkText}>Já possui uma conta? Faça Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
