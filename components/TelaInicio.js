import {StyleSheet, View, Image, Text, Pressable } from 'react-native';


export default function TelaInicial (props) {
  return (
    <View style={ estilos.container }>
      <Image source={{uri:"https://logodix.com/logo/20376.jpg"} } style={ estilos.img } />
      <Text style={ estilos.titulo }>Xbox</Text>
      <Text style={ estilos.descricao }>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

      <Pressable
        onPress={ () => { props.navigation.navigate("Consoles") } }
        style={estilos.card}
      >
        <Image source={{uri:"https://imgs.casasbahia.com.br/1510399480/1xg.jpg"}} style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os consoles</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Jogos") } }
        style={estilos.card}
      >
        <Image source={ {uri:"https://sm.ign.com/t/ign_br/screenshot/default/uhul_hj6w.1080.jpg"} } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os jogos</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Nuvem") } }
        style={estilos.card}
      >
        <Image source={{uri: "https://cdn.mos.cms.futurecdn.net/BragPccuMMTnNYMZnEUMsc.jpg" }} style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça o xCloud</Text>
      </Pressable>
    </View>
  )
}
// ...existing code...
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // mantem conteúdo no topo como na mockup
    backgroundColor: '#2c2e2d',
    padding: 20,
    paddingTop: 30,
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 100,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#107c0f',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: '#d4d4d4',
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',            // ocupa largura responsiva
    maxWidth: 360,           // limita em telas maiores
    backgroundColor: '#107c0f',
    borderRadius: 10,
    overflow: 'hidden',      // garante que a imagem respeite o radius
    marginVertical: 8,
    alignItems: 'center',
    elevation: 6,            // sombra Android
    shadowColor: '#000',     // sombra iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cardImg: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  cardTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
    width: '100%',
    backgroundColor: 'transparent',
  }
});
// ...existing code...