import * as React from 'react';
import {View , StyleSheet, Text, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { MessageOutlined } from '@ant-design/icons';


const styles = StyleSheet.create({
    grow: {
        marginTop:5,
        marginLeft:20,
        fontSize: 26,
        color:'#505A5B',
    },
    wwww: {
        marginVertical:20,

    },
    btn1: {
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EF7F8F',
        marginLeft:33,
        marginRight:33,
        marginBottom: 10, 
    },
    btn2: {
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#6DC29B',
        marginLeft:33,
        marginRight:33, 
        marginBottom: 10, 

    },
    btn3: {
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#288CC0',
        marginLeft:33,
        marginRight:33, 
        marginBottom: 10, 

    },
    btn4: {
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF8C5D',
        marginLeft:33,
        marginRight:33, 
        marginBottom: 10, 

    },
    btn5: {
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#896DC1',
        marginLeft:33,
        marginRight:33, 
        marginBottom: 10, 

    },
    btn6: {
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DF2C4A',
        marginLeft:33,
        marginRight:33, 
        marginBottom: 10, 

    },
    btn7: {
        height:100,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FED53B',
        marginLeft:33,
        marginRight:33,
        marginBottom: 10, 

    },
  });
  const withUri = {uri:'https://facebook.github.io/react/img/logo_og.png'};
  
  const Axes = () => {

    return (
      <View >
        <Text style={styles.grow} >Axes</Text>
          

        <View style={styles.wwww}>
            <Button style={styles.btn1} mode="contained" onPress={() => console.log('Pressed')}>
                Social
            </Button>
            <Button style={styles.btn2}  mode="contained" >
                Environnemental
            </Button>
            <Button style={styles.btn3} mode="contained" >
                Informatique / Digital
            </Button>
            <Button style={styles.btn4} mode="contained" >
                Qualité
            </Button>
            <Button style={styles.btn5}  mode="contained" >
                Culturel
            </Button>
            <Button style={styles.btn6} mode="contained" >
                Productivité
            </Button>
            <Button style={styles.btn7} mode="contained" >
                Economique / Finance
            </Button>
        </View>
        <View style={{
            height:40,
            width:'100%',
            justifyContent:'center',
            backgroundColor:'#202020',
        }}>
            <Text style={{
            fontSize:14,
            color:'#fff',
            textAlign:'center',
        }}>
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Copyright_white.svg/200px-Copyright_white.svg.png"}}
          style={{ width: 15, height: 15, marginHorizontal:10}}
          />
             &nbsp; Copyright 2021
            </Text>
            
            
        </View>
    </View>
  );
};

export default Axes;