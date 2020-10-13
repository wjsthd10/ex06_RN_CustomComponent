import React,{Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

export default class MyCom extends Component{
    render(){
        return(
            <View>
                {/* <Text style={styles.text}>Hello</Text> */}
                <View style={styles.button}><Button onPress={this.props.click} title={this.props.title} color={this.props.color}></Button></View>
            </View>
        );
    }


}

export const styles=StyleSheet.create({
    container:{
        
    },
    text:{
        color:'red'
    },
    button:{
        marginTop:10,        
    }
});