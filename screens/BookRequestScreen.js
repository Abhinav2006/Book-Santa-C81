import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config.js';
import firebase from 'firebase';

export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state = {userID: firebase.auth().currentUser.email,
                    bookName: "",
                    reasonToRequest: ""}
    }

    addRequest=(bookName, reasonToRequest)=>{
        var userID = this.state.userID
        var documentID = Math.random().toString(36).substring(7)
        db.collection('Requested_Books').add({
            "user_id":userID, 'book_name':bookName, 'reason_to_request':reasonToRequest, 'request_id':documentID
        })
        this.setState({bookName:'', reasonToRequest:''})
        Alert.alert("Book Requested Successfully")
    }

    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = "Book Request" navigation = {this.props.navigation}/>
                <KeyboardAvoidingView style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <TextInput style = {styles.formTextInput} placeholder = {"Enter book name"}
                    onChangeText = {(text)=>this.setState({bookName:text})}
                    value = {this.state.bookName}/>
                    <TextInput style = {[styles.formTextInput, {height:300}]}
                    multiline
                    numberOfLines = {8}
                    placeholder = {"Why do you need the book?"}
                    onChangeText = {(text)=>this.setState({reasonToRequest:text})}
                    value = {this.state.reasonToRequest}/>
                <View style = {styles.buttons}>
                <TouchableOpacity onPress = {()=>{this.addRequest(this.state.bookName, this.state.reasonToRequest)}}>
                    <Text>Request</Text>
                </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons:{
        backgroundColor: '#90A5A9',
        alignSelf: 'center',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 20,
        padding: 20,
    },
    formTextInput:{
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    }
});