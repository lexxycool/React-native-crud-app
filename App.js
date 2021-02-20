import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { LoginScreen,RegistrationScreen, HomeScreen } from './src/screens';
import { decode, encode } from 'base-64';
import { firebase }  from './src/firebase/config';
import { set } from 'react-native-reanimated';



if (!global.btoa) { global.btoa = encode }
if(!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

 /* if (loading) {
	  return (
		  <></>
	  )
  }  

  useEffect(() => {
	const usersRef = firebase.firestore().collection('users');
	firebase.auth().onAuthStateChanged(user =>{
		if(user){
			usersRef
				.doc(user.uid)
				.get()
				.then(document => {
					const userData = document.data()
					setLoading(false)
					setUser(userData)
				})
				.catch(error => {
					setLoading(false)
				});
		} else {
			setLoading(false)
		}
	});

},[]);
*/

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
