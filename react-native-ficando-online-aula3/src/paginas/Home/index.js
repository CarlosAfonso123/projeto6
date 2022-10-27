import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
    return (
        <ScrollView>
            <View style={estilos.container}>
                <>

                    <Text style={estilos.textoNome}>{usuario.name}</Text>
                    <Text style={estilos.textoEmail}>{usuario.email}</Text>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {id: usuario.id})}>
                        <Text style={estilos.repositorios}>
                            Ver vendas do vendedor
                        </Text>
                    </TouchableOpacity>

            
                </>

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
    )
}