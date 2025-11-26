import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Alert } from 'react-native';

export default function ImcScreen() {
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');
	const [resultado, setResultado] = useState('');
	const [diag, setDiag] = useState('');

	const calcularIMC = () => {
		if (peso !== '' && altura !== '') {
			const p = parseFloat(peso.replace(',', '.'));
			const a = parseFloat(altura.replace(',', '.'));
			if (isNaN(p) || isNaN(a) || a === 0) {
				Alert.alert('Erro', 'Digite valores numéricos válidos');
				return;
			}
			const imc = p / (a * a);
			setResultado(imc.toFixed(2));
			if (imc < 18.5) {
				setDiag('Magreza');
			} else if (imc >= 18.5 && imc <= 24.99) {
				setDiag('Normal');
			} else if (imc >= 25 && imc <= 29.99) {
				setDiag('Sobrepeso');
			} else if (imc >= 30 && imc <= 39.99) {
				setDiag('Obesidade');
			} else {
				setDiag('Obesidade grave!');
			}
		} else {
			Alert.alert('Atenção', 'Por favor, digite o peso e altura corretamente!');
		}
	};

	return (
		<ImageBackground
			source={{ uri: 'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW4lMjBkYXJrfGVufDB8fDB8fHww' }}
			style={styles.background}
			resizeMode="cover"
		>
			<View style={styles.app}>
				<Text style={styles.titulo}>⚖️ Calcule seu IMC</Text>

				<View style={styles.box_inputs}>
					<TextInput
						placeholder="Exemplo: 1.75"
						placeholderTextColor="#A7B4FF"
						style={styles.input}
						keyboardType="numeric"
						value={altura}
						onChangeText={setAltura}
					/>

					<TextInput
						placeholder="Digite o peso (kg)"
						placeholderTextColor="#A7B4FF"
						style={styles.input}
						keyboardType="numeric"
						value={peso}
						onChangeText={setPeso}
					/>
				</View>

				<Button title="Calcular" onPress={calcularIMC} />

				<View style={styles.resultContainer}>
					<Text style={styles.label}>Resultado</Text>
					<Text style={styles.resultValue}>{resultado || '—'}</Text>

					<Text style={[styles.label, { marginTop: 16 }]}>Diagnóstico</Text>
					<Text style={styles.resultValue}>{diag || '—'}</Text>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	titulo: {
		color: '#4C8BF5',
		fontSize: 32,
		marginBottom: 10,
		marginTop: 15,
		fontWeight: '800'
	},
	box_inputs: {
		margin: 20
	},
	input: {
		margin: 10,
		color: '#D9DEFF',
		borderColor: '#243056',
		borderWidth: 2,
		textAlign: 'center',
		height: 44,
		width: 240,
		borderRadius: 12,
		backgroundColor: '#12172E'
	},
	resultContainer: {
		marginTop: 24,
		alignItems: 'center',
		gap: 4
	},
	label: {
		color: '#A7B4FF',
		fontSize: 16,
		fontWeight: '700'
	},
	resultValue: {
		color: '#D9DEFF',
		fontSize: 22,
		fontWeight: '800'
	},
	background: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0A0F24'
	}
});
