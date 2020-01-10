import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";

function IconsComponent (props)
{
    return(
        <View style={props.style}>
            <TouchableOpacity  onPress={props.callback}>
                <Ionicons name={props.name} size={30} color={'black'} />
            </TouchableOpacity>
        </View>
    )
}

export default function RouteItem()
{
    const [text, setText] = useState("")
    const [favorite, isFavorite] = useState(false)

    const selectIconName = () =>
    {
        if(favorite) return 'md-star'
        else return 'md-star-outline'
    }

    const defaultCallback = (text) =>
    {
        console.log(text)
    }

    return (
        <View style={Styles.customView}>
            <View style={Styles.mainView}>
                <TouchableOpacity   onPress={()=>{defaultCallback("TouchableOpacity")}}>
                    <Text style={Styles.textStyle} >Route I</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.secondView}>
                <View style={Styles.descriptionView}>
                    <Text>labas</Text>
                </View>
                <IconsComponent name = {selectIconName()} style={Styles.iconView} callback = {()=>{defaultCallback("TouchableOpacity")}}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    customView: {
        flex: 1,
        width: '95%',
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#F0E6E6',
    },
    mainView:{
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondView: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
    },

    descriptionView: {
        width: '85%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconView:{
        width: '15%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },

})
