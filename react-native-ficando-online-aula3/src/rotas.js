import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

const Tab = createNativeStackNavigator();

import Principal from './paginas/Principal';
import Repositorios from './paginas/Repositorios';
import CriarRepositorio from './paginas/CriarRepositorio';
import InfoRepositorio from './paginas/InfoRepositorio';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator style={estilos.screen}>
                <Tab.Screen name="Principal" options={{ title: "Login" }} component={Principal}/>
                <Tab.Screen name="Repositorios" component={Repositorios} />
                <Tab.Screen name="CriarRepositorio" options={{ title: "Escolha produtos" }} component={CriarRepositorio} />
                <Tab.Screen name="InfoRepositorio" options={{ title: "Vendas do vendedor" }} component={InfoRepositorio} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const estilos = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fafafa',
        color: 'white',
        alignItems: 'center',
        marginBottom: 20,
    }
})