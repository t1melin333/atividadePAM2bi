// ...existing code...
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';



export default function TelaNuvem () {
  return (
    <ScrollView contentContainerStyle={ estilos.container }>
      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Xbox Cloud Gaming</Text>
        <Text style={ estilos.subtitulo }>Serviço de streaming de jogos</Text>

        <Text style={ estilos.paragrafo }>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
        <Text style={ estilos.paragrafo }>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
        <Text style={ estilos.paragrafo }>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>

        <Image
          source={{ uri: "https://assets.xboxservices.com/assets/8e/74/8e74625d-e5c2-4ead-99d9-479e95206395.jpg?n=Consule-Hub_Super-Hero-1400_348920_1920x1080.jpg" }}
          style={ estilos.img }
        />
      </View>
    </ScrollView>
  )
}
const estilos = StyleSheet.create({ 
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#107c0f', // fundo escuro semelhante ao mock
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#fff',   // área clara central
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#107c0f',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2f8b5a',
    marginBottom: 12,
    textAlign: 'center',
  },
  paragrafo: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 20,
  },
  img: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginTop: 14,
    resizeMode: 'cover',
  },
});
// ...existing