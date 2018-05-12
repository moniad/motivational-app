import React from 'react';
import { AppLoading  } from 'expo';
import { StyleSheet, Text, View, FlatList, TextInput, Alert, Button, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading: true,
      titleText: "So you need some motivation...",
      bodyText: "I'll comfort you!",
      motivationClicked: false,
      yes1Clicked: false,
      yes2Clicked: false
    };
  }
  async componentDidMount(){
    await Expo.Font.loadAsync({
      'Pangolin': require('./assets/Pangolin-Regular.ttf'),
    });
    this.setState({loading: false});
  }

  render() {
    if(this.state.loading) return <AppLoading />
  
    if(!this.state.motivationClicked){
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
              onPress={() => this.setState({motivationClicked: true}) }
            >
              <Text style={styles.buttonStartText}>MOTIVATE ME</Text> 
            </TouchableOpacity>
  
          </View>
        </View>
        );
    }
    return(
      <Image source={require('./assets/hearts.gif')}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}>
 
      </Image>
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


  buttonYES: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonYESText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
    height: 50,
    justifyContent: 'center',
  },
  buttonYES2: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonYES2Text: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
    height: 50,
    justifyContent: 'center',
  }
});
