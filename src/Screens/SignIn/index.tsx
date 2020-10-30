import React,{useState} from 'react'
import { View,Text,Image,TextInput,TouchableOpacity,AsyncStorage } from "react-native"
import styles from "./styles"
import { firebase } from '../../firebase/config'


const SignInScreen = ({navigation}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }

    const onLoginPress = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            AsyncStorage.setItem('user', JSON.stringify(response.user)).then(()=>navigation.navigate("Profil"))
        })
        .catch(error => {
            alert(error)
        })
    }
    return(
    <View style={styles.view}>

                <Image
                    style={styles.logo}
                    source={require('../../assets/images/paper.png')}
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Se connecter</Text>
                </TouchableOpacity>
                {/* <View style={styles.footerView}>
                    <Text style={styles.footerText}>Vous n'avez pas de compte? <Text onPress={onFooterLinkPress} style={styles.footerLink}>S'inscrire</Text></Text>
                </View> */}
    
    </View>       
    )
}

export default SignInScreen