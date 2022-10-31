import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rotas';


export default function App() {
  return (
    <Rotas />

    );
}
/*securityTextEntry: senha
npm install react-native-reanimated   ou  npx expo install react-native-reanimated
por no fim do babel plugins: ['react-native-reanimated/plugin'],
https://stackoverflow.com/questions/70516450/error-requiring-module-node-modules-react-native-reanimated-src-animated-js

npm install axios@0.26.0


json-server --watch --host 192.168.0.201 db.json
*/
