import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert, Pressable, ScrollView } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


/**import localImage from '../assets/images/background-image/Background-Image.png';
import navigation from '../navigation';**/

const Separator = () => (
  <View style={styles.separator} />
);

// Background Image
const localImage = require("../assets/images/background-image/Background-Image.png");

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
       <ImageBackground source={localImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Welcome To Dash Warning</Text>      
        <Separator /> 
        
        <Pressable style={styles.button} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.text}>Login</Text>
        </Pressable> 

        <Separator />

        <Pressable style={styles.button} onPress={() => navigation.navigate('EnterDetails')}>
        <Text style={styles.text}>Enter Details</Text>
        </Pressable> 

        <Separator />

        <Pressable style={styles.button} onPress={() => navigation.navigate('DetectFault')}>
        <Text style={styles.text}>Detect Fault</Text>
        </Pressable>
        </ImageBackground>
      </View>
  );
}

/** Routing Between Pages
 * <TouchableOpacity onPress={() => navigation.navigate('MostCommonFaults')}style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
      
      <Button title="Login" onPress={() => navigation.navigate('Signin')} />**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#17A99A',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    //: '#17A99A',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#17A99A',
  },
});
