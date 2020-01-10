import React from "react";
import {StyleSheet, Text, View} from "react-native";


export const TopSeparator = ()=> {
    return(
        <View style={{
            width: '100%',
            height: 25,
            backgroundColor: 'gray',
        }}/>
    )
}

export const Space = (props)=>{
    return <View style={
        {
            height: props.size,
        }
    }/>}

//'#F0E6E6'

export const RelappLogo = ()=>{
    return (
        <View style= {{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0E6E6', }}>
            <Text style={{fontWeight: 'bold', fontSize:36}}>Relapp</Text>
        </View>
    )
}

export const BasicStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0E6E6',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
