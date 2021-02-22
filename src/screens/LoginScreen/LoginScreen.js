import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';




export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(response => {
				const uid = response.user.uid
				const usersRef = firebase.firestore().collection('users')
				usersRef
					.doc(uid)
					.get()
					.then(firestoreDocument => {
						if(!firestoreDocument.exists) {
							alert('User does not exist')
							return;
						}
						const user = firestoreDocument.data()
						navigation.navigate('Home', {user})
					})
					.catch(error => {
						alert(error)
					});
			})
			.catch(error => {
				alert(error)
			})


    }

    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    }

    return (
			<View style={styles.container}>
				<KeyboardAwareScrollView
					style={styles.keybaorad}
					keyboardShouldPersistTaps='always'
					
				>
					<Image
						source={require('../../../assets/icon.png')}
						style={styles.logo}
					/>

					<TextInput
						style={styles.input}
						placeholder='E-mail...'
						placeholderTextColor='#aaa'
						value={email}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize='none'
						underlineColorAndroid='transparent'
						autoCompleteType='email'
					/>

					<TextInput
						style={styles.input}
						placeholder='Password...'
						placeholderTextColor='#aaa'
						value={password}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize='none'
						secureTextEntry={true}
						underlineColorAndroid='transparent'
					/>

					<TouchableOpacity
                        style={styles.button}
                        onPress={() => onLoginPress()}>
						<Text style={styles.buttonTitle}>Log In</Text>
					</TouchableOpacity>
                    
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Don't have an account?
                            <Text style={styles.footerLink} onPress={onFooterLinkPress}>Sign up</Text>
                        </Text>
                    </View>

				</KeyboardAwareScrollView>
			</View>
		);
}
