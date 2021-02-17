import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';



export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {

    }

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
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
						underlineColorAndroid='transparent'
					/>

					<TouchableOpacity
                        style={styles.button}
                        onPress={() => onLoginPress()}>
						<Text style={styles.buttonTitle}>Log In</Text>
					</TouchableOpacity>
                    
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Don't have an account?
                            <Text style={styles.footerLink} onPress={onLoginPress}>Sign up</Text>
                        </Text>
                    </View>

				</KeyboardAwareScrollView>
			</View>
		);
}
