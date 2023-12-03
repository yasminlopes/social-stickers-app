import { useEffect, useState } from 'react';
import { Button, TextInput, View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { styles } from './LoginStyles';
import { ApiService } from '../../../services/api/ApiService';
import { NotificationService } from '../../../services/notification/NotificationService';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

  
    const handleLogin = async () => {
      setIsLoading(true);
    
      try {
        const loginData = {
          username: username,
          password: password,
        };
    
        const response = await ApiService.login(loginData);
    
        if (response.data.token) {
          setIsAuthenticated(true);
          navigation.navigate('Home', { username: username });
        }
    
        NotificationService.notify(response);
    
      } catch (error) {
        NotificationService.notify(error.response.data);
      } finally {
        setIsLoading(false);
      }
    };
    
    async function verifyAvailableBiometrics() {
        const compatible = await LocalAuthentication.hasHardwareAsync();

        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    }

    async function handleAuthentication() {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login com biometria',
            fallbackLabel: 'Biometria não reconhecida'
        });

        setIsAuthenticated(result.success);

        if (result.success) {
            navigation.navigate('Home');
        }
    }

    useEffect(() => {
        verifyAvailableBiometrics();
    }, []);

    return (
        <View style={styles.container}> 
            <Image
                style={styles.logo}
                source={require('../../../../assets/brand/logo.png')}
            />

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button} onPress={handleLogin}>
                {isLoading ? (<ActivityIndicator /> ) : (<Text style={styles.buttonText}>Login</Text>)}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('RegisterUserScreen')}>
            <Text style={styles.linkText}>
              Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}
