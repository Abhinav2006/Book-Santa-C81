import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CustomSidebarMenu extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {{flex:0.8}}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style = {{flex:0.2, justifyContent: 'flex-end', paddingBottom: 30}}>
                    <TouchableOpacity style = {{height: 30, width: '100%', justifyContent: 'center'}}
                    onPress = {()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut();
                    }}>
                        <Text style = {{color: 'red'}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}