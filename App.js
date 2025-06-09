// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'teste@email.com' && senha === '1234') {
      Alert.alert('✅ Login correto');
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('❌ Login incorreto');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu login</Text>
      <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail} autoCapitalize='none' keyboardType='email-address' />
      <TextInput placeholder='Senha' style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title='Entrar' onPress={handleLogin} />
      <Text style={styles.register}>Não tem conta? Registre-se</Text>
    </View>
  );
}

function DashboardScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Áreas de Atuação</Text>
      <Button title='Direito Civil' onPress={() => navigation.navigate('Direito Civil')} />
      <Button title='Direito Empresarial' onPress={() => navigation.navigate('Direito Empresarial')} />
      <Button title='Direito Trabalhista' onPress={() => navigation.navigate('Direito Trabalhista')} />
    </ScrollView>
  );
}

function CivilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.areaContainer}>
      <Text style={styles.areaTitle}>Direito Civil</Text>
      <Text style={styles.areaText}>
        O Direito Civil trata das relações privadas entre cidadãos. Exemplos:
        {'\n'}- Compra e venda de imóveis
        {'\n'}- Divórcios e pensão alimentícia
        {'\n'}- Contratos de aluguel
      </Text>
    </ScrollView>
  );
}

function EmpresarialScreen() {
  return (
    <ScrollView contentContainerStyle={styles.areaContainer}>
      <Text style={styles.areaTitle}>Direito Empresarial</Text>
      <Text style={styles.areaText}>
        O Direito Empresarial regula as atividades comerciais e empresariais. Exemplos:
        {'\n'}- Abertura de empresas
        {'\n'}- Contratos comerciais
        {'\n'}- Recuperação judicial
      </Text>
    </ScrollView>
  );
}

function TrabalhistaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.areaContainer}>
      <Text style={styles.areaTitle}>Direito Trabalhista</Text>
      <Text style={styles.areaText}>
        O Direito Trabalhista protege os direitos do trabalhador. Exemplos:
        {'\n'}- Rescisão de contrato sem justa causa
        {'\n'}- Horas extras e adicional noturno
        {'\n'}- Reclamações na Justiça do Trabalho
      </Text>
    </ScrollView>
  );
}

function ApiScreen() {
  const [processo, setProcesso] = useState('');
  const [autor, setAutor] = useState('');
  const [reu, setReu] = useState('');
  const [email, setEmail] = useState('');

  const handleConsulta = () => {
    if (!processo || !autor || !reu || !email) {
      Alert.alert('Preencha todos os campos');
      return;
    }
    Alert.alert('Consulta enviada!', `Processo: ${processo}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Confira seu processo</Text>
      <TextInput placeholder='Número do processo' style={styles.input} value={processo} onChangeText={setProcesso} />
      <TextInput placeholder='Autor' style={styles.input} value={autor} onChangeText={setAutor} />
      <TextInput placeholder='Réu' style={styles.input} value={reu} onChangeText={setReu} />
      <TextInput placeholder='Seu e-mail' style={styles.input} value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' />
      <Button title='Consultar via API' onPress={handleConsulta} />
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} options={{ drawerItemStyle: { height: 0 } }} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Direito Civil" component={CivilScreen} />
        <Drawer.Screen name="Direito Empresarial" component={EmpresarialScreen} />
        <Drawer.Screen name="Direito Trabalhista" component={TrabalhistaScreen} />
        <Drawer.Screen name="Consultar Processo" component={ApiScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 },
  register: { marginTop: 15, textAlign: 'center' },
  areaContainer: { flexGrow: 1, padding: 20, justifyContent: 'center' },
  areaTitle: { fontSize: 22, marginBottom: 10, textAlign: 'center' },
  areaText: { fontSize: 16, lineHeight: 24 },
});

