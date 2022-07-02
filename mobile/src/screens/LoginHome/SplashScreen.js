import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity, Dimensions,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 

const SplashScreen =({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
               <Animatable.Image 
               animation="bounceIn"
               duration="1500"
               source={require('./waterLogo.png')}
               style={styles.logo}
               resizeMode="stretch"
               />
            </View>
            <View style={styles.footer}>
                <Text style = {styles.title}>Keeping you connected with water!</Text>
                <Text style = {styles.text}> Sign in with an account</Text>
                <View style ={styles.button}></View>

                <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Home")}
      >
        <LinearGradient 
        colors={['#08d4c4','#01ab9d']}
        style={styles.signIn}>
              <Text style={styles.btnText}>Get started </Text>
        <MaterialIcons name="navigate-next" 
        color ="white"
        size = {20} >
            
        </MaterialIcons>
        </LinearGradient>
      
      </TouchableOpacity>
            </View>
        
        </View>
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387',
    },

    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },

    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },

    logo:{
        width: height_logo,
        height: height_logo,
    },

    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
    },

    text :{
        color:'grey',
        marginTop: 30,
    },

    button:{
        alignItems:'flex-end',
        marginTop: 30,
    },

    signIn: {
        width: 150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection: 'row',
    },

    textSign: {
    
        fontWeight:'bold',
        color: "#fff",
    },
    
  loginButton: {
    width: 150,
    height:40,
    backgroundColor:'#009387',
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 10,
    // marginTop: 30,
    borderRadius:50,
    flexDirection: 'row',
    // marginVertical: 10,
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  btnText: {
    fontWeight:'bold',
    color: "#fff",
  },
})


export default SplashScreen;