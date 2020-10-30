import React from "react"
import { View,Text, TouchableOpacity } from "react-native"
import styles from './styles'

const HomeScreen = ()=>{


    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.touchOpcity}>
            <Text style={styles.text}>Se connecter</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpcity}>
            <Text style={styles.text}>S'inscrire</Text> 
            </TouchableOpacity>
         
        </View>
    )
}

export default HomeScreen