import React,{Component} from 'react';
import {View, Image, StyleSheet, Button, Text, TextInput, Alert} from 'react-native';
import MyCom from './MyCom'
import { MyCom2 } from './MyCom2';


export default class Main extends Component{

    state={
        names:'',
        msg:'output'
    }

    render(){
        
        return(
            <View style={styles.root}>
                {/* <Text>Hello</Text>
                <TextInput style={{backgroundColor:'#55226622'}} onChangeText={this.change}></TextInput> */}
                {/* 나만의 컴포넌트 */}
                {/* <MyComponent name={this.state.names} title='click'></MyComponent>
                <MyComponent name={'yun'} title='click2'></MyComponent>
                <MyComponent name={'kim'} title='click3'></MyComponent> */}
                {/* <Text style={styles.text}>{this.state.msg}</Text> */}

                <MyCom2 msg={this.state.msg}></MyCom2>

                <MyCom click={this.clickBtn} title='button01' color='indigo'></MyCom>
                <MyCom click={this.clickBtn2} title='button02' color='orange'></MyCom>
                <MyCom click={this.clickBtn3} title='button03' color='green'></MyCom>

                {/* props로 클릭시 실행되는 함수를 전달해준다. */}

            </View>
        );// return....

    }//render mathod...

    clickBtn=()=>{
        this.setState({msg:'Hello'});
    }
    clickBtn2=()=>{
        this.setState({msg:'Nice'});
    }
    clickBtn3=()=>{
        this.setState({msg:'Good'});
    }

    // 입력받은 글자 출력
    change=(m)=>{
        this.setState({names:m})
    }
}//Main class.....

// 나만의 커스텀 컴포넌트 : 리스트를 보여줄 아이템을 만들때 이런 방식으로 만든다 //반복문 배열의 개수만큼 해줌
export class MyComponent extends Component{

    render(){
        return(
            <View style={{margin:16}}>   
                         {/* props는 상수로서 값을 변경할 수 없다. */}
                <Text>Hello {this.props.name}!</Text>
                <Button title={this.props.title}></Button>
            </View>
        );
    }// render mathod....
    
}// MyComponent....

// 스타일 객체들 적용
const styles=StyleSheet.create({
    root:{
        backgroundColor:'#55882233',
        flex:1,
        padding:16
    },
    text:{
        borderColor:'green',
        fontSize:25,
        fontWeight:"bold",
        alignSelf:"center"
    }
});// styles.....