import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems: 'center',
        padding:20
    },
    title: {

    },
    logo: {
        height: 90,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
      input: {
        width:'100%',
        height: 48,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal:30,
        paddingLeft: 16,
        borderWidth:1,
        borderColor:'#788eec'
        
    
    },
    button: {
        width:'100%',
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
        
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})
export default styles