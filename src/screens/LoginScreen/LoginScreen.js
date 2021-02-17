import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';



export default function LoginScreen() {

    const [email, setEmail] = useState('');

    return (
			<View style={styles.container}>
				<KeyboardAwareScrollView
                    style={styles.keybaorad}
                    keyboardShouldPersistTaps='always'>

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
				</KeyboardAwareScrollView>
			</View>
		);
}
