import { useState } from 'react';
import { ApiService } from '../../../../services/api/ApiService';

export const useRegisterUser = (navigation) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const registerUser = async () => {
    setIsLoading(true); 
    try {
      const userData = {
        name: name,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
      };

      const response = await ApiService.registerUser(userData);

      if (response.user) {
        navigation.navigate('Home', { username: username });
      } else {
        console.error(response.error );
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleEmailChange = (email) => {
    setEmail(email);
    if (email && !validateEmail(email)) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  }

  return {
    name, setName,
    lastName, setLastName,
    email, setEmail,
    username, setUsername,
    password, setPassword,
    isLoading, setIsLoading,
    emailError, setEmailError,
    registerUser,
    handleEmailChange
  };
};