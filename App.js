import React from 'react';
import { StyleSheet, Text, View, Dimensions,StatusBar} from 'react-native';
import Navigation from "./screens/Navigation";

export default class App extends React.Component {

  render() {
    return (
        <View style={{flex: 1}}>
            <Navigation/>
        </View>
    )
  }
}
