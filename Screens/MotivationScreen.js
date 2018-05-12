import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { playSound } from "../utils/playSound";

export default class MotivationScreen extends React.Component {
    render(){
        playSound(); 
        return(
            <View style={styles.container}>
                <Image source={require('../assets/hearts.gif')}
                style={{
                    flex: 1,
                    resizeMode: 'cover',
                }}>
        
                </Image>
            </View>
        );   
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#40ff00',
    }
})