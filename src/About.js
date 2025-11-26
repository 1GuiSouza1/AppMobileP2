import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>ℹ️ Sobre o App</Text>

        <Text style={styles.text}>
          Este aplicativo foi desenvolvido para treinar habilidades em
          desenvolvimento mobile utilizando React Native e Expo. 🚀
        </Text>

        <Text style={[styles.text, styles.textIndent]}>
          Funcionalidades:
        </Text>

        <View style={styles.list}>
          <Text style={styles.listItem}>• 📝 Lista de Tarefas</Text>
          <Text style={styles.listItem}>• 🌡️ Conversor de Temperatura</Text>
          <Text style={styles.listItem}>• 💬 Frases Motivacionais</Text>
          <Text style={styles.listItem}>• ⚖️ Cálculo de IMC</Text>
        </View>

        <Text style={styles.footer}>
          Criado por Guilherme • {new Date().getFullYear()} ✨
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F24',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#12172E',
    padding: 24,
    borderRadius: 18,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#243056'
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#4C8BF5',
    marginBottom: 14,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#D9DEFF',
    marginBottom: 10,
    lineHeight: 22,
    textAlign: 'justify'
  },
  textIndent: {
    marginTop: 6,
    paddingLeft: 8
  },
  list: {
    marginTop: 8,
    marginBottom: 16,
    gap: 8,
    paddingLeft: 12
  },
  listItem: {
    fontSize: 16,
    color: '#A7B4FF',
  },
  footer: {
    marginTop: 12,
    fontSize: 14,
    color: '#6C7BFF',
    textAlign: 'center',
    fontWeight: '600'
  },
});
