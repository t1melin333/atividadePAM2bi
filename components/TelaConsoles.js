// ...existing code...
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';


// ...existing code...
export default function TelaConsoles () {
  return (
    <ScrollView contentContainerStyle={ estilos.container } >
      <View style={ estilos.box }>
        <Image source={{ uri: "https://www.gigantec.com.br/media/catalog/product/cache/66c3fa0fb26d248d0ca40a64a387c3da/c/9/c9a2613a-9ccb-4644-ba2f-87afeaf488b4.jpg" }} style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES S</Text>
        <Text style={ estilos.subtitulo }>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series S é pra quem busca jogos de nova geração gastando pouco. É o console mais barato da nova geração. Ele é o equilíbrio entre gráfico e performance</Text>
      </View>

      <View style={ estilos.box }>
        <Image source={{ uri: "https://imgs.casasbahia.com.br/1561317820/1xg.jpg" }} style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES X</Text>
        <Text style={ estilos.subtitulo }>O Xbox mais rápido e poderoso de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
      </View>  
    </ScrollView>
  )
}
const estilos = StyleSheet.create({ 
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',      // centra os cards como na imagem
    backgroundColor: '#2c2e2d',
  },
  box: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#fff',   // área clara
    borderRadius: 12,
    padding: 18,
    marginBottom: 18,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  img: {
    width: '70%',
    height: 220,    
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#107c0f',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',   
    marginBottom: 10,
    textAlign: 'center',
  },
  paragrafo: {
    fontSize: 15,
    color: '#444',
    textAlign: 'justify',
  },
});
// ...existing code...