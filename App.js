import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions,StatusBar} from 'react-native';
import Navigation from "./screens/Navigation";

export default function App()
{
    const [state, setState] = useState("");
    console.log("prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrintas",state);
    return (
        <View style={{flex: 1}}>
            <Navigation callback = {setState}/>
        </View>
    )
  }

