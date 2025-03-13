import React, { Component } from "react";
import { View, Text, Image, Platform} from 'react-native';


class App extends Component {
  render() {
    return(
      <View>
        <Text style={{color: '#006400', fontSize: 25, margin: 10}}>
          Projeto Inicial da Aplicação</Text>
          <Text
  style={{
    fontFamily: Platform.select
    ({
      android: 'Inter_900Black',
      ios: 'Inter-Black',
    }),
  }}>
  Versão 2.0
</Text>

        <Image
        source={{uri: 'https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-1024x683.jpg'}}
        style={{width: 300, height: 300}}
        />

        <Jobs largura={200} altura={200}/>
      </View>
    );
  }
}

export default App;

// Processo de Carregamento rápido da aplicação
class Jobs extends Component {
  render() {
      let img = 'https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg';

      return(
        <View>
          <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
          />
          <Text>Cachorro</Text>
        </View>
      );
  }
}
