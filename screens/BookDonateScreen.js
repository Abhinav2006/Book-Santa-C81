import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends React.Component{
    constructor(){
        super();
        this.state = {requestedBookList:[]}
        this.requestedref = null
    }

    getRequestedBookList=()=>{
        this.requestref = db.collection(requested_books)
        .onSnapshot((snapshot)=>{
            var requestedBookList = snapshot.docs.map(document.data())
            this.setState({requestedBookList:requestedBookList})
        })
    }

    componentDidMount(){
        this.getRequestedBookList();
    }

    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = "Donate Book"/>
                <View style = {styles.buttons}>
                <TouchableOpacity>
                    <Text>Donate</Text>
                </TouchableOpacity>
                </View>
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
    }
});