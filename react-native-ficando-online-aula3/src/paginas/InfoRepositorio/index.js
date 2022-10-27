import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRepositoriosDoUsuario, deletarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function salvar() {
        const resultado = await salvarRepositoriosDoUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

        if (resultado === 'sucesso') {
            Alert.alert('Repositorio atualizado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro')
        }

    }

    async function deletar() {
        const resultado = await deletarRepositoriosDoUsuario(route.params.item.id)

        if (resultado === 'sucesso') {
            Alert.alert('Repositório deletado com sucesso');
            navigation.goBack();
        } else {
            Alert.alert("Erro ao deletar")
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Categoria do Produto"
                autoCapitalize="none"
                style={estilos.entrada}
            />
            <TextInput
                placeholder="Produto"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />

            <TextInput
                placeholder="Quantidade"
                autoCapitalize="none"
                style={estilos.entrada}

            />

            <TextInput
                placeholder="Local de entrega"
                autoCapitalize="none"
                style={estilos.entrada}

            />


            <TouchableOpacity
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilos.botao, { backgroundColor: '#DD2B2B', marginTop: 10 }]}
                onPress={deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
