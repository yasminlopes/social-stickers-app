import { Text, View } from 'react-native';

export default function HomeScreen({ username }) {
 return (
   <View>
    <Text>Logado com sucesso {username}</Text>
    </View>
  );
}