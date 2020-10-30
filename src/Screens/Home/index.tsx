import React, {useEffect, useState} from "react"
import { View,Text, TouchableOpacity,Image,AsyncStorage } from "react-native"
import styles from './styles'
import {firebase} from '../../firebase/config'


const HomeScreen = ({ navigation })=>{

    const [loading,setLoading] = useState(true);

    useEffect(()=>{
  AsyncStorage.getItem('user').then((res)=>{
      if(res){
          console.log({res})
          navigation.navigate("Profil")
      }
      setLoading(false) 
  }).catch(()=>{
    setLoading(false)
})
    
    },[])

  


    return !loading?(
        <View style={styles.view}>
            <Image style={styles.logo} source={require('../../assets/images/paper.png')}/>
            <TouchableOpacity onPress={()=> navigation.navigate("SignIn")}  style={styles.touchOpcity}>
            <Text style={styles.text}>Se connecter</Text> 
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.touchOpcity}>
            <Text style={styles.text}>S'inscrire</Text> 
            </TouchableOpacity>  */}
        </View>
    ):<></>
}

export default HomeScreen