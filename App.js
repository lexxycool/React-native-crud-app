import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { LoginScreen,RegistrationScreen, HomeScreen } from './src/screens';


const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
		<NavigationContainer>
			<Stack.Navigator>
				{user ? (
					<Stack.Screen name='Home'>
						{(props) => <HomeScreen {...props} extraData={user} />}
					</Stack.Screen>
				) : (
					<>
						<Stack.Screen name='Login' component={LoginScreen} />
						<Stack.Screen
							name='Registration'
							component={RegistrationScreen}
							options={{ title: 'Register Here' }}
						/>
					</>
				)}
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
