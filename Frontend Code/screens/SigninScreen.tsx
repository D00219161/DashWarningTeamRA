import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert, Pressable } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function SigninScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login To Your Account</Text>   

        <Text style={styles.title}>Username</Text>   
        <Text style={styles.title}>Password</Text>   
  
        <Pressable style={styles.button} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.text}>Log On</Text>
        </Pressable>   

        <Separator/>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Cancel</Text>
        </Pressable>

        <Separator/>

        <Text style={styles.title}>Create Account</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.text}>Create</Text>
        </Pressable> 
    </View>   
  );
}

/** Routing Between Pages
 * <TouchableOpacity onPress={() => navigation.navigate('MostCommonFaults')}style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#17A99A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
    //: '#17A99A',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
  },
  button1:{
    backgroundColor: 'green',
    flexDirection: 'row',
    width: '40%',
    height: 40,
  },
  button2:{
    backgroundColor: 'green',
    flexDirection: 'row',
    width: '40%',
    height: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17A99A',
    flexDirection: 'row',
    width: '40%',
    height: 60,
  },
});
