import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';
import TelaInicial from './components/TelaInicio.js';
import TelaConsoles from './components/TelaConsoles.js';
import TelaJogos from './components/TelaJogos.js';
import TelaNuvem from './components/TelaNuvem.js';

const Stack = createStackNavigator();

export default function App() {
  return(
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Tela Inicial" component = { TelaInicial }/>
      <Stack.Screen name= "Consoles" component = { TelaConsoles } />
      <Stack.Screen name= "Jogos" component = { TelaJogos }/>
      <Stack.Screen name= "Nuvem" component = { TelaNuvem } />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
