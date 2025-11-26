import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ImcScreen from './imc';
import ToDoList from './ToDoList';
import Frases from './frases';
import Converter from './Converter';
import About from './About';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Início</Text>

            {/* BOTÕES */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('imc')}>
                <Text style={styles.buttonText}>Calculadora de IMC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ToDoList')}>
                <Text style={styles.buttonText}>Lista de Tarefas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('frases')}>
                <Text style={styles.buttonText}>Frase Aleatória</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Converter')}>
                <Text style={styles.buttonText}>Conversor de Temperatura</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: "#555" }]}
                onPress={() => navigation.navigate('About')}
            >
                <Text style={styles.buttonText}>Sobre o Aplicativo</Text>
            </TouchableOpacity>
        </View>
    );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#0A0F24"
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        marginBottom: 24,
        textAlign: "center",
        color: "#4C8BF5"
    },
    button: {
        backgroundColor: "#1e90ff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 14
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "700"
    }
});
