import React, { Component } from "react";
import { View, Text, Image, Platform, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ color: '#006400', fontSize: 25, marginBottom: 10 }}>
            Áreas do Direito
          </Text>

          <Direito
            imagem="https://fktadvogados.com.br/wp-content/uploads/2023/07/direito.jpg"
            area="Direito Trabalhista"
            descricao="Regula as relações entre empregadores e empregados, tratando de direitos como salário, jornada e condições de trabalho."
          />

          <Direito
            imagem="https://easyjur.com/blog/wp-content/uploads/2023/05/2-2.jpg"
            area="Direito Criminal"
            descricao="Responsável por lidar com crimes e punições, garantindo o julgamento justo e a defesa do acusado."
          />

          <Direito
            imagem="https://eliasecuryadv.com.br/wp-content/uploads/2024/06/Entenda-a-importancia-e-abrangencia-do-Direito-Civil.webp"
            area="Direito Civil"
            descricao="Trata dos direitos e deveres entre pessoas físicas e jurídicas, como contratos, heranças e propriedades."
          />

          <Direito
            imagem="https://blog.estacio.br/wp-content/uploads/2024/06/Direito-ambiental.jpeg"
            area="Direito Ambiental"
            descricao="Visa proteger o meio ambiente, regulando o uso sustentável dos recursos naturais e punindo danos ambientais."
          />

          <Direito
            imagem="https://www.ricardoribeiroadv.com.br/images/02.jpg"
            area="Direito do Consumidor"
            descricao="Defende os direitos dos consumidores nas relações de consumo, garantindo segurança, transparência e qualidade nos produtos e serviços."
          />

          <View style={{ marginTop: 20 }}>
            <Image
              source={{ uri: "https://media.istockphoto.com/id/1327353834/pt/foto/judge-gavel-with-justice-lawyers-having-team-meeting-at-law-firm-in-background.jpg?s=612x612&w=0&k=20&c=-KtpnxEDfX8r_VqRt4_x5u1sP3mEdwq7GVaT2flUbNM=" }}
              style={{ width: '100%', height: 180, borderRadius: 10 }}
            />
          </View>

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
          <Text style={styles.textoModelo}>{this.props.area}</Text>
          <Text style={styles.textoInfo}>{this.props.descricao}</Text>
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
    }),
    textAlign: 'justify'
  }
};
