import React from 'react';
import {View , Text, StyleSheet} from 'react-native'

const ForgotPassword =()=>{
    return(
        <View style={style.container}>
                <Text style={{color:'white'}}>Forgot Password</Text>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
    }
})


export default ForgotPassword;