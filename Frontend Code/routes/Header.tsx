import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Header({navigation, title}){
    const openMenu = () => {
      navigation.openDrawer();
    }
  
  return (
    <view style={styles.header}>
      <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
      <Text style={styles.headerText}>{title}</Text>
    </view>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
icon:{

},
headerText:{},
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });