import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function RegistrationScreen({ navigation }) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onRegisterPress = () => {};

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
					autoCapitalize='none'
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
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>

				<TextInput
					style={styles.input}
					placeholder='Confirm Password'
					placeholderTextColor='#aaa'
					value={confirmPassword}
					onChangeText={(text) => setConfirmPassword(text)}
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
