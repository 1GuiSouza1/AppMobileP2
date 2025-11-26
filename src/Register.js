import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { registerUser } from '../database/database';

export default function Register({ onClose }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {

        if (!email || !password) {
            Alert.alert("Aviso", "Preencha todos os campos.");
            return;
        }

        const ok = await registerUser(email, password);

        if (ok) {
            Alert.alert("Sucesso!", "Usuário cadastrado!");
            onClose && onClose();
        } else {
            Alert.alert("Erro", "Email já cadastrado!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 30,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#aaa",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#0a84ff",
        padding: 14,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    }
});
