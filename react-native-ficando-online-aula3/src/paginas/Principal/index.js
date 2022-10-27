import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import { buscaUsuario } from '../../servicos/requisicoes/usuarios';

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    async function busca(){
        const resultado = await buscaUsuario(nomeUsuario)

        setNomeUsuario('')
        if (resultado ) {
            setUsuario(resultado)
            apagar = 0
        }
        else {
            Alert.alert('Usuário nao encontrado')
            setUsuario({})
        }
    }

    return (
        <ScrollView>
            <View style={estilos.container}>
                {
                    usuario?.login &&
                <>
                    
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                    </View>
                    <Text style={estilos.textoNome}>{usuario.name}</Text>
                    <Text style={estilos.textoEmail}>{usuario.email}</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                            <Text style={estilos.seguidoresTexto}>Vendas feitas</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {id: usuario.id})}>
                        <Text style={estilos.repositorios}>
                            Ver vendas do vendedor
                        </Text>
                    </TouchableOpacity>

            
                </>
                }

                <TextInput
                    placeholder="Nome do Vendedor"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}
                />

                <TouchableOpacity style={estilos.botao}
                    onPress={busca}
                >
                    <Text style={estilos.textoBotao}>
                        Logar
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={estilos.botao}
                                   
                >
                    <Text style={estilos.textoBotao}
                        onPress={() => navigation.navigate('CriarCliente')}
                    >
                        Cadastrar Cliente
                    </Text>
                </TouchableOpacity>

                
            </View>
        </ScrollView>
    );
}
//<View style={estilos.fundo} />