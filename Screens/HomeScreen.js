import React from 'react';
import { AppLoading } from 'expo';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
    state={
        loading: true,
        titleText: "So you need some motivation...",
        bodyText: "I'll comfort you!",
    }
    async componentDidMount(){
        await Expo.Font.loadAsync({
          'Pangolin': require('../assets/Pangolin-Regular.ttf'),
        });
        this.setState({loading: false});
    }
    render(){
        if(this.state.loading) return <AppLoading />

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
      
              <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                {'\n'}{'\n'}{this.state.titleText}{'\n'}{'\n'}
                </Text>
                <Text numberOfLines={5}>
                  {this.state.bodyText}
                </Text>
              </Text>
              <View style={styles.buttonStart}>
                <TouchableOpacity
                  style = {styles.buttonStart}
                  onPress={() => navigate ('Motivation') }
                >
                  <Text style={styles.buttonStartText}>MOTIVATE ME</Text> 
                </TouchableOpacity>
      
              </View>
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
    baseText: {
      fontFamily: 'Pangolin',
      textAlign: 'center',
    },
    titleText: {
      fontSize: 30,
      fontWeight: '900',
      color: '#bf00ff',
    },
    buttonStart: {
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
      buttonStartText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#000',
        alignContent: 'center',
      },    
})