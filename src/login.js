import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Modal } from 'react-native';
import { validateLogin } from '../database/database';
import Register from './Register'; // tela de cadastro

export default function Login({ navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // modal de cadastro
    const [modalRegister, setModalRegister] = useState(false);

    const handleLogin = async () => {

        if (!username || !password) {
            Alert.alert("Erro", "Preencha usuário e senha.");
            return;
        }

        const ok = await validateLogin(username, password);

        if (ok) {
            navigation.replace('Home');
        } else {
            Alert.alert("Erro", "Usuário ou senha incorretos!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: "#777", marginTop: 10 }]}
                onPress={() => setModalRegister(true)}
            >
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            {/* MODAL CADASTRO */}
            <Modal visible={modalRegister} animationType="slide" transparent={false}>
                <Register onClose={() => setModalRegister(false)} />

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#ff3b30", margin: 20 }]}
                    onPress={() => setModalRegister(false)}
                >
                    <Text style={styles.buttonText}>Fechar Cadastro</Text>
                </TouchableOpacity>
            </Modal>

        </View>
    );
}

// -----------------STYLES-----------------

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
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
});
