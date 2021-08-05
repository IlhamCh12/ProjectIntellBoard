import React  from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground,Dimensions , Image} from 'react-native';
import {Input} from 'react-native-elements';
import { Button } from 'react-native-paper'


    let state = {
        checked:true,
    };
const login = (navigation) => {
 
  return (
      <ScrollView style={{flex:1, backgroundColor: "#F6F6F6"}}
        showsVerticalScrollIndicator={false}>

            <ImageBackground source={{ uri:'https://data.whicdn.com/images/356595900/original.jpg'}}
            style={{height: Dimensions.get('window').height /1.9, width:'100%' }}>
                
            </ImageBackground>
            <View style={styles.bottomView}>
                <View  style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri:"https://data.whicdn.com/images/356572170/original.png"}}
                    style={{ width: 120, height: 90, margin:10}}
                    />
                    <Text style={{paddingLeft:40, paddingRight:40}}>
                        Outil de pilotage de la performance de votre entreprise
                    </Text>
                </View>
                <View style={{paddingLeft:40, paddingRight:40, paddingTop:10, paddingBottom:20}}>
                    <Text style={styles.bnvn}>
                        Bienvenue !
                    </Text>
                    <View style={{paddingTop:30}}>
                        
                            <Input
                                placeholder='Email'
                            />

                            <Input placeholder="Mot de passe" secureTextEntry={true} />
                    </View>
                    <View style={styles.fff}>
                            <Button style={styles.btn1} mode="contained" onPress={() => console.log('Pressed')}>
                                Login
                            </Button>
                       
                    </View>
                    <View style={{flex:1, }}>
                                                   
                                <Text style={{flex:1, color:'#505A5B'}}>Mot de passe oublié ?</Text>
                    </View>
                </View>
                
                </View>

        </ScrollView>
  );
};

export default login;

const styles = StyleSheet.create({
    bottomView:{
        flex: 1.5,
        backgroundColor:"#F6F6F6",
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius: 60,
    },
    bnvn:{
        fontSize: 25,
      color: '#42AB9E',
      fontWeight: 'normal',
    },
    fff:{
        height: 50,
        marginTop:20,
        flexDirection: 'row',
        marginBottom:20,
    },
    btn1:{
        height:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#42AB9E',
    },
});