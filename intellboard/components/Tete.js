import * as React from 'react';
import { Header, Avatar } from 'react-native-elements';
import {View , StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  grow: {
    
  },
});

const Tete = () => {

  return (
    <View style={styles.grow}>
      <Header
        placement="left"
        barStyle='dark-content'
        leftComponent={{ style:{ marginTop: 8}, icon: 'menu', color: '#505A5B' }}
        centerComponent={
          <Image source={{uri:"https://data.whicdn.com/images/356572170/original.png"}}
          style={{ width: 80, height: 40 }}
          />}
        rightComponent={{ text: 'USER Name',style: { color: '#505A5B', marginTop: 8},  }}
        containerStyle={{
          marginTop:24,
          backgroundColor: '#F5F7F6',
          justifyContent: 'space-around',
        }}       
      />
      
    </View>
  );
};

export default Tete;