import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';



export default function RegistrationScreen({ navigation }) {

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const clearField = () => {
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

	const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(response => {
                    const uid = response.user.uid
                    const data = {
                        id: uid,
                            email,
                            fullName,
                    };
                    const usersRef = firebase.firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .set(data)
                        .then(() => {
                            navigation.navigate('Home', {user: data})  
                        })

                        .catch(error => {
                            alert(error)
                        });
                    
                    if(usersRef){
                        alert('account created');
                        clearField();
                    };


                })
                .catch(error => {
                    alert(error)
                });
        
        

    };

	const backToLogin = () => {
		navigation.navigate('Login');
	};

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={styles.keyboard}
				keyboardShouldPersistTaps='always'
			>
				<Image
					source={require('../../../assets/icon.png')}
					style={styles.logo}
				/>

				<TextInput
					style={styles.input}
					placeholder='Full Name'
					placeholderTextColor='#aaa'
					value={fullName}
					onChangeText={(text) => setFullName(text)}
					underlineColorAndroid='transparent'
					autoCapitalize='words'
				/>

				<TextInput
					style={styles.input}
					placeholder='E-mail'
					placeholderTextColor='#aaa'
					value={email}
					onChangeText={(text) => setEmail(text)}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>

				<TextInput
					style={styles.input}
					placeholder='Password'
					placeholderTextColor='#aaa'
					value={password}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry={true}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>

				<TextInput
					style={styles.input}
					placeholder='Confirm Password'
					placeholderTextColor='#aaa'
					value={confirmPassword}
					onChangeText={(text) => setConfirmPassword(text)}
					secureTextEntry={true}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>

				<TouchableOpacity style={styles.button} onPress={onRegisterPress}>
					<Text>Create an account</Text>
				</TouchableOpacity>

				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Already got an account?
						<Text style={styles.footerLink} onPress={backToLogin}>
							Login
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
}
