import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function Frases() {
  const frases = [
    "Vai Corinthians!!!",
    "Minha vida é um filme.",
    "Acredite em você!",
    "Bom Dia!",
    "Escolha ser feliz!",
    "Você é mais forte do que pensa.",
    "Sonhe grande."
  ];

  const [frase, setFrase] = useState('Toque no botão gerar');

  const gerarFrase = () => {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(frases[indice]);
  };

  const limparFrase = () => {
    setFrase("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Frases</Text>

      <View style={styles.box_frases}>
        <Text style={styles.fraseText}>{frase}</Text>
      </View>

      <View style={styles.box_btn}>
        <Pressable
          style={({ pressed }) => [styles.btn, pressed && { opacity: 0.7 }]}
          onPress={gerarFrase}
        >
          <Text style={styles.btnText}>Gerar</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.btn, pressed && { opacity: 0.7 }]}
          onPress={limparFrase}
        >
          <Text style={styles.btnText}>Limpar</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F24',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    color: '#4C8BF5',
    fontSize: 32,
    fontWeight: '800',
  },
  box_frases: {
    backgroundColor: '#12172E',
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    minHeight: 80,
    margin: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#243056',
    paddingHorizontal: 16
  },
  fraseText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D9DEFF',
    textAlign: 'center'
  },
  box_btn: {
    flexDirection: 'row',
    gap: 18
  },
  btn: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12
  },
  btnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff'
  },
});
