import {StyleSheet, View, Image, Text, Pressable } from 'react-native';


export default function TelaInicial (props) {
  return (
    <View style={ estilos.container }>
      <Image source={"https://logodix.com/logo/20376.jpg" } style={ estilos.img } />
      <Text style={ estilos.titulo }>Xbox</Text>
      <Text style={ estilos.descricao }>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

      <Pressable
        onPress={ () => { props.navigation.navigate("Consoles") } }
        style={estilos.card}
      >
        <Image source={ "https://imgs.casasbahia.com.br/1510399480/1xg.jpg" } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os consoles</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Jogos") } }
        style={estilos.card}
      >
        <Image source={ "https://sm.ign.com/t/ign_br/screenshot/default/uhul_hj6w.1080.jpg" } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os jogos</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Nuvem") } }
        style={estilos.card}
      >
        <Image source={ "https://cdn.mos.cms.futurecdn.net/BragPccuMMTnNYMZnEUMsc.jpg" } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça o xCloud</Text>
      </Pressable>
    </View>
  )
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c2e2d',
    padding: 15,
    },
    img: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 100,
    },
    titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#107c0f',
    marginBottom: 5,
    },
    descricao: {
    fontSize: 16,
    textAlign: 'center',
    },
    card: {
    backgroundColor: '#107c0f',
    },
    cardImg: {
    width: 350,
    height: 200,
    },
    cardTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    }
});