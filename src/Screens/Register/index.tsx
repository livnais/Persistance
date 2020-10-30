import React, { useState } from 'react'
import { View ,TouchableOpacity,Image,Text,TextInput} from 'react-native'
import styles from './styles'
import {firebase} from '../../firebase/config'

const RegisterScreen = ({navigation})=>{

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('SignIn')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword || !fullName) {
            alert("Passwords don't match.")
            return
        }
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                navigation.navigate("SignIn")
              
            })
            .catch((error) => {
                
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
          
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/paper.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>S'inscrire</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Déjà un compte? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Se connecter</Text></Text>
                </View>
        
        </View>
    )
}

export default RegisterScreen