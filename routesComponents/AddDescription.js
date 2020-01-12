import React, {useState, useEffect} from "react";
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import {MainModal, TransparentModal} from "./ModalComponent";

export default function AddDescription(props)
{
    const [transparentVisible, setTransparentVisible] = useState(true);
    const [mainVisible, setMainVisible] = useState(true);
    const ChangeState = ()=>{
        setTransparentVisible(!transparentVisible);
        setMainVisible(!mainVisible);
    };
    useEffect(() => {
        console.log("useEffect",props.setModalVisible);
        ChangeState();
    }, [props.setModalVisible]);

    return (
        <View>
            <TransparentModal setModalVisible = {transparentVisible}/>
            <MainModal header = {"Add Description"} setModalVisible = {mainVisible} callback = {()=>{ChangeState()}} />
        </View>
    );
}
