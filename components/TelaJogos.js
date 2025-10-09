import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';

import imgJogoCyber from '../../assets/jogo-2.png';
import imgJogoForza from '../../assets/jogo-3.png';
import imgJogoHalo from '../../assets/jogo-4.png';
import estilos from './estilos';


export default function TelaJogos () {
  return (
    <ScrollView>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Jogos em 4k</Text>
        <Text style={ estilos.descricao }>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

        <View style={ estilos.boxJogo }>
          <ImageBackground source={ imgJogoForza } style={ estilos.card }>
            <Text style={ estilos.cardTitulo }>Forza Horizon 5</Text>
          </ImageBackground>

          <Text style={ estilos.paragrafo }>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México. </Text>
        </View>

        <View style={ estilos.boxJogo }>
          <ImageBackground source={ imgJogoCyber } style={ estilos.card }>
            <Text style={ estilos.cardTitulo }>Cyberpunk 2077</Text>
          </ImageBackground>

          <Text style={ estilos.paragrafo }>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>
        </View>

        <View style={ estilos.boxJogo }>
          <ImageBackground source={ imgJogoHalo } style={ estilos.card }>
            <Text style={ estilos.cardTitulo }>Halo 5</Text>
          </ImageBackground>

          <Text style={ estilos.paragrafo }>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>
        </View>
      </View>
    </ScrollView>
  )
}
 
const estilos = StyleSheet.create({ 
  container: {
    flex: 1,    
    backgroundColor: '#2c2e2d',
    padding: 15,
  },
    titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#107c0f',
    marginBottom: 5,
    textAlign: 'center',
    },
    descricao: {
    fontSize: 16,
    color: '#d4d4d4',
    textAlign: 'center',
    marginBottom: 15,
    },
    boxJogo: {
    marginBottom: 20,
    backgroundColor: '#3a3d3b',
    borderRadius: 10,
    padding: 15,
    },
    card: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    },
    cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    textAlign: 'center',
    },
    paragrafo: {
    fontSize: 16,
    color: '#d4d4d4',
    textAlign: 'justify',
    marginTop: 10,
    },
});