import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import estilos from "./estilos";
import { criandoClientes } from "../../../servicos/requisicoes/clientes";

export default function CriarCliente({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco_entrega, setEndereco_entrega] = useState('');

    async function criarCliente() {
        const resultado = await criandoClientes(
            route.params.id,
            nome,
            email,
            endereco_entrega,
        )

        if (resultado === 'sucesso') {
            Alert.alert('Cliente criado!')
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao criar cliente')
        }

    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do cliente"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                placeholder="E-mail do cliente"
                style={estilos.entrada}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Endereço de entrega"
                style={estilos.entrada}
                value={endereco_entrega}
                onChangeText={setEndereco_entrega}
            />

            <TouchableOpacity style={estilos.botao}
                onPress={criarCliente}>
                <Text style={estilos.textoBotao}>
                    Confirmar
                </Text>
            </TouchableOpacity>
        </View >
    )
}