import React, { Component } from "react";
import { View, Text, Image, Platform, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ color: '#006400', fontSize: 25, marginBottom: 10 }}>
            Objeto
          </Text>

          
          <Direito
            imagem="https://fktadvogados.com.br/wp-content/uploads/2023/07/direito.jpg"
            area="Direito Trabalhista"
          />

          
          <Direito
            imagem="https://easyjur.com/blog/wp-content/uploads/2023/05/2-2.jpg"
            area="Direito Criminal"
          />
        </View>
      </ScrollView>
    );
  }
}

export default App;

class Direito extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}>
        <Image
          source={{ uri: this.props.imagem }}
          style={{ width: '100%', height: 180 }}
        />
        <View style={{ padding: 10 }}>
          <Text style={styles.textoModelo}>{this.props.modelo}</Text>
          <Text style={styles.textoInfo}>Ano: {this.props.ano}</Text>
          <Text style={styles.textoInfo}>Cor: {this.props.cor}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  textoModelo: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.select({
      android: 'sans-serif-medium',
      ios: 'Arial-BoldMT'
    }),
    marginBottom: 5
  },
  textoInfo: {
    fontSize: 14,
    fontFamily: Platform.select({
      android: 'sans-serif',
      ios: 'Arial'
    })
  }
};
