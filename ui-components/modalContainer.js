import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'native-base';

export default class ModalContainer extends React.Component{
render(){
    return(
        <View>
            <View>
                <View>
                    <Icon type = "MaterialIcons" name = "close"/>
                </View>
            </View>

        </View>
    )
}


}