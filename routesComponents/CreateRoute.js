import {View, ScrollView, StyleSheet, TextInput, TouchableOpacity, Text} from "react-native";
import MapView from "react-native-maps";
import React, {useState} from "react";
import Map from "../routesComponents/Map";
import {
    IconsComponent,
    Space
} from "../components/stylingComponents";
import InviteFriends from "./InviteFriends";
import AddDescription from "./AddDescription";
import {RelappMiniTextInput} from "../components/RelappTextInput";
import {ButtonTypes, RelappButton} from "../components/RelappButton";

export default function CreateRoute(props)
{
    const [friendsModal, setFriendsModal] = useState(false);
    const [descriptionModal, setDescriptionModal] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Space size = {20}/>
                <View style = {styles.locationContainer}>
                    <IconsComponent name = {"md-undo"} style={{...styles.iconView, right:'250%'}} callback = {()=> props.navigation.goBack()}/>
                    <Text style={{...styles.text, right:'50%'}} > Create new route</Text>
                </View>
                <Space size = {20}/>
                <View style={styles.locationContainer}>
                    <RelappMiniTextInput defaultValue = {"Country"}/>
                    <HorizontalSpace size = {20}/>
                    <RelappMiniTextInput defaultValue = {"Region"} />
                </View>
                <Space size = {20}/>
                <View style = {styles.textView}>
                    <Text style={styles.text}> Select route locations </Text>
                </View>
                <Space size = {20}/>
                <View style={styles.locationContainer}>
                    <Map/>
                </View>
                <Space size = {20}/>
                <View style={styles.locationContainer}>
                    <RelappButton style = {ButtonTypes().smallButton} text = "Invite friends" callback = {()=>{
                        setFriendsModal(!friendsModal);
                        console.log("Invite friends", friendsModal)
                    }}/>
                    <HorizontalSpace size = {20}/>
                    <RelappButton style = {ButtonTypes().smallButton} text = "Description" callback = {()=>{
                        setDescriptionModal(!descriptionModal);
                        console.log("Description")
                    }}/>
                    <HorizontalSpace size = {20}/>
                    <RelappButton style = {ButtonTypes().smallButton} text = "Select music" callback = {()=>{console.log("Select music")}}/>
                </View>
                <Space size = {20}/>
                <View style={styles.locationContainer}>
                    <RelappButton style = {ButtonTypes().largeButton} text = "Create New" callback = {()=>{console.log("Search")}}/>
                </View>
                <Space size = {20}/>
            </ScrollView>
            <InviteFriends setModalVisible = {friendsModal}/>
            <AddDescription setModalVisible = {descriptionModal}/>
        </View>
    )
}

const HorizontalSpace = (props)=>{
    return <View style={
        {
            width: props.size,
        }
    }/>}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0E6E6',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    textView: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    locationContainer: {
        backgroundColor: '#F0E6E6',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    iconView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
})

