import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ConverterScreen() {
	const [value, setValue] = useState('');
	const [from, setFrom] = useState('C');
	const [to, setTo] = useState('F');
	const [result, setResult] = useState('');

	const convert = () => {
		const v = parseFloat(value.replace(',', '.'));
		if (isNaN(v)) { setResult('Valor inválido'); return; }
		let c;
		// normalize to Celsius
		if (from === 'C') c = v;
		if (from === 'F') c = (v - 32) * 5 / 9;
		if (from === 'K') c = v - 273.15;

		let out;
		if (to === 'C') out = c;
		if (to === 'F') out = (c * 9 / 5) + 32;
		if (to === 'K') out = c + 273.15;

		setResult(`${out.toFixed(2)} °${to}`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>🌡️ Conversor de Temperatura</Text>
			<TextInput
				placeholder="Valor"
				placeholderTextColor="#A7B4FF"
				keyboardType="numeric"
				value={value}
				onChangeText={setValue}
				style={styles.input}
			/>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => setFrom('C')} style={[styles.choice, from === 'C' && styles.choiceActive]}>
					<Text style={from === 'C' ? styles.choiceTextActive : styles.choiceText}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setFrom('F')} style={[styles.choice, from === 'F' && styles.choiceActive]}>
					<Text style={from === 'F' ? styles.choiceTextActive : styles.choiceText}>F</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setFrom('K')} style={[styles.choice, from === 'K' && styles.choiceActive]}>
					<Text style={from === 'K' ? styles.choiceTextActive : styles.choiceText}>K</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.arrow}>→</Text>

			<View style={styles.row}>
				<TouchableOpacity onPress={() => setTo('C')} style={[styles.choice, to === 'C' && styles.choiceActive]}>
					<Text style={to === 'C' ? styles.choiceTextActive : styles.choiceText}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setTo('F')} style={[styles.choice, to === 'F' && styles.choiceActive]}>
					<Text style={to === 'F' ? styles.choiceTextActive : styles.choiceText}>F</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setTo('K')} style={[styles.choice, to === 'K' && styles.choiceActive]}>
					<Text style={to === 'K' ? styles.choiceTextActive : styles.choiceText}>K</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.button} onPress={convert}>
				<Text style={styles.buttonText}>Converter</Text>
			</TouchableOpacity>

			{result ? <Text style={styles.result}>{result}</Text> : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#0A0F24',
		justifyContent: 'center'
	},
	title: {
		fontSize: 28,
		fontWeight: '800',
		marginBottom: 16,
		color: '#4C8BF5',
		textAlign: 'center'
	},
	input: {
		height: 52,
		backgroundColor: '#12172E',
		borderRadius: 12,
		paddingHorizontal: 14,
		borderWidth: 1,
		borderColor: '#243056',
		color: '#fff' // texto digitado branco
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 14
	},
	choice: {
		padding: 12,
		backgroundColor: '#12172E',
		borderRadius: 10,
		width: 80,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#243056'
	},
	choiceActive: {
		backgroundColor: '#1e90ff',
		borderColor: '#1e90ff'
	},
	choiceText: {
		color: '#A7B4FF',
		fontWeight: '600'
	},
	choiceTextActive: {
		color: '#fff',
		fontWeight: '700'
	},
	arrow: {
		textAlign: 'center',
		marginVertical: 12,
		fontSize: 20,
		color: '#A7B4FF'
	},
	button: {
		marginTop: 16,
		padding: 14,
		backgroundColor: '#1e90ff',
		alignItems: 'center',
		borderRadius: 12
	},
	buttonText: {
		color: '#fff',
		fontWeight: '800',
		fontSize: 16
	},
	result: {
		marginTop: 18,
		fontSize: 22,
		fontWeight: '800',
		textAlign: 'center',
		color: '#4C8BF5'
	}
});