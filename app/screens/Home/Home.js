import { Text, View } from 'react-native';

export default function HomeScreen({ route }) {
  const { username } = route.params;
 return (
   <View>
    <Text>Logado com sucesso com: {username}</Text>
    </View>
  );
}