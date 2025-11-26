import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoList() {
	const [tarefa, setTarefa] = useState('');
	const [listaTarefas, setListaTarefas] = useState([]);

	const adicionarTarefa = () => {
		if (!tarefa.trim()) return;
		setListaTarefas([
			...listaTarefas,
			{ key: Math.random().toString(), valor: tarefa.trim(), feito: false }
		]);
		setTarefa('');
	};

	const removerTarefa = (key) => {
		setListaTarefas(listaTarefas.filter((t) => t.key !== key));
	};

	const alternarFeito = (key) => {
		setListaTarefas(
			listaTarefas.map((t) => (t.key === key ? { ...t, feito: !t.feito } : t))
		);
	};

	const renderItem = ({ item }) => (
		<View style={styles.itemContainer}>
			<TouchableOpacity onPress={() => alternarFeito(item.key)} style={styles.boxTarefa}>
				<Text style={[styles.textoTarefa, item.feito && styles.textoFeito]}>
					{item.valor}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => removerTarefa(item.key)}>
				<MaterialIcons name="delete-outline" size={24} style={styles.excluirIcone} />
			</TouchableOpacity>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>📝 Minhas Tarefas</Text>

			<View style={styles.boxInput}>
				<TextInput
					style={styles.input}
					placeholder="Digite uma tarefa..."
					placeholderTextColor="#FFC72E"
					value={tarefa}
					onChangeText={setTarefa}
				/>
				<TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
					<MaterialIcons name="add" size={28} color="#fff" />
				</TouchableOpacity>
			</View>

			{listaTarefas.length === 0 ? (
				<Text style={styles.mensagemVazia}>Adicione itens à lista.</Text>
			) : (
				<FlatList data={listaTarefas} renderItem={renderItem} keyExtractor={(item) => item.key} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#0A0F24'
	},
	titulo: {
		fontSize: 26,
		fontWeight: '800',
		marginTop: 50,
		marginBottom: 20,
		textAlign: 'center',
		color: '#4C8BF5'
	},
	boxInput: {
		flexDirection: 'row',
		marginBottom: 20
	},
	input: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#243056',
		borderRadius: 12,
		padding: 12,
		marginRight: 10,
		color: '#D9DEFF',
		backgroundColor: '#12172E'
	},
	botao: {
		width: 50,
		height: 50,
		borderRadius: 12,
		backgroundColor: '#1e90ff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	boxTarefa: {
		flex: 1,
		padding: 15,
		borderWidth: 1,
		borderColor: '#243056',
		borderRadius: 12,
		marginRight: 16,
		backgroundColor: '#12172E'
	},
	textoTarefa: {
		fontSize: 16,
		color: '#D9DEFF'
	},
	textoFeito: {
		textDecorationLine: 'line-through',
		color: '#8C8C8C'
	},
	excluirIcone: {
		fontSize: 40,
		color: '#d45650',
		marginRight: 5
	},
	mensagemVazia: {
		marginTop: 50,
		textAlign: 'center',
		fontSize: 16,
		color: '#A7B4FF',
		fontWeight: '600'
	}
});
