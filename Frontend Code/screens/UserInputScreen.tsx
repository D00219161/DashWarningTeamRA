// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, SafeAreaView, TextInput, Pressable} from 'react-native';
import { onChange } from 'react-native-reanimated';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);
  
export default function UserInputScreen({ navigation }: RootTabScreenProps<'Home'>): JSX.Element {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Enter Fault Details</Text>   
    
    <Separator/>
    <Text style={styles.title}>Car Type - Make</Text> 

    <Separator/>
    <Text style={styles.title}>Colour of Fault</Text> 
    
    <Separator/>
    <Text style={styles.title}>Describe Fault</Text> 

    <Separator/>
    <Text style={styles.title}>Time Detected</Text>  
     
    <Separator/>
    <Text style={styles.title}>Location</Text>  

    <Separator/>

    <Pressable style={styles.button} onPress={() => navigation.navigate('MostCommonFaults')}>
        <Text style={styles.text}>Suggest Fault</Text>
        </Pressable>   

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#737373',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  separator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  box:{
    width: '80%',
    height: '20%',
    padding: 5,
  },
  inner:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
      alignItems: 'center',
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
