import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';


export default function TelaConsole () {
  return (
    <ScrollView style={ estilos.container}>
      <View style={ estilos.box }>
        <Image source={ "https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/01/02-16-1024x683.jpg" } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES S</Text>
        <Text style={ estilos.subtitulo }>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series S é pra quem busca jogos de nova geração gastando pouco. É o console mais barato da nova geração. Ele é o equilíbrio entre gráfico e performance</Text>
      </View>

      <View style={ estilos.box }>
        <Image source={ "https://imgs.casasbahia.com.br/1561317820/1xg.jpg" } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES X</Text>
        <Text style={ estilos.subtitulo }>O Xbox mais rápido e poderoso de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
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
    box: {
    marginBottom: 20,       
    backgroundColor: '#3a3d3b',
    borderRadius: 10,
    padding: 15,
    },
    img: {
    width: '100%',
    height: 200,    
    borderRadius: 10,
    marginBottom: 10,
    },
    titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#107c0f',   
    marginBottom: 5,
    },
    subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',   
    marginBottom: 10,
    },
    paragrafo: {
    fontSize: 16,
    color: '#d4d4d4',
    textAlign: 'justify',
    },
});