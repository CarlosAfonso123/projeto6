import React from 'react';
import "react-native-gesture-handler";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../paginas/Home';
import Principal from '../paginas/Principal';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (
        <Drawer.Navigator
                screenOptions={{
                drawerActiveTintColor: "steelblue",
                drawerLabelStyle: { fontSize: 15, marginBottom: "5%" },
                drawerStyle: { width: "80%" },
            }}>
            <Drawer.Screen name="Login" component={Principal} />

        </Drawer.Navigator>
    );
}