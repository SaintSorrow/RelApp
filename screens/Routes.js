import {View, ScrollView, StyleSheet, TextInput} from "react-native";
import MapView from "react-native-maps";
import React, {useState} from "react";
import Map from "../routesComponents/Map";
import {Space} from "../components/stylingComponents";
import RouteItem from "../routesComponents/RouteItem";



export default function Routes()
{
    const [text, setText] = useState("")
    return (
        <View style={styles.container}>
            <Space size = {30}/>
            <TextInput
                placeholder='Search'
                textAlign={'center'}
                style={styles.textStyle}
                onChangeText={ (text) => {
                    setText(text)
                }
                }
            />
            <Space size = {20}/>
            <Map/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0E6E6',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    container2: {
        flex: 1,
        left:10,
        backgroundColor: '#F0E6E6',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    textStyle: {
        height: 40,
        width:'80%',
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 10,

    }

})
