import React from 'react';
import Speech from 'expo';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { playSound } from "../utils/playSound";
import cliches from "../cliches";

export default class MotivationScreen extends React.Component {

    renderCard = ({ name }) => (
        <TouchableOpacity
          style={styles.card}
          key={name}
         // onPress={() => this.sayittt(name)}
        >
          <Text style={styles.header}>{name}</Text>
        </TouchableOpacity>
      );
    
      renderCards = () => (
        <View style={styles.cards}>
          {cliches.map(this.renderCard)}
        </View>
      );

    render(){
        playSound(); 
        return(
            <View style={styles.container}>
                <Image source={require('../assets/hearts.gif')}
                style={StyleSheet.absoluteFill}/>
                
                {this.renderCards()}
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
    },
    card: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        marginTop: 10,
    },
    cards: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 25,
        paddingHorizontal: 10,
        flex: 1,
      },
})