import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen,RegistrationScreen } from './src/screens';


const Stack = createStackNavigator();

export default function App() {
  return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Registration' component={RegistrationScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
