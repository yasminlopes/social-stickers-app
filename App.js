import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/Home/Home';
import LoginScreen from './app/screens/Auth/Login/Login';
import RegisterUserScreen from './app/screens/Auth/RegisterUser/containers/RegisterUser';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen 
            name="RegisterUserScreen" 
            component={RegisterUserScreen} 
            options={{ title: null, headerTransparent: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </View>
  );
}
