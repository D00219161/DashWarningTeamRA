import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';
import * as React from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function NavBarScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
    
    <Text onPress={() => navigation.navigate('QA')} style={styles.title}>Detect Fault Q&A Forum</Text>
    <Separator /> 

    <Text onPress={() => navigation.navigate('MostCommonFaults')} style={styles.title}>Most Common Faults</Text>
    <Text onPress={() => navigation.navigate('RedFault')} style={styles.title}>Red Faults</Text>
    <Text onPress={() => navigation.navigate('AmberFault')} style={styles.title}>Amber Faults</Text>
    <Text onPress={() => navigation.navigate('GreenFault')} style={styles.title}>Green and Blue Faults</Text>
    <Separator /> 

    <Text onPress={() => navigation.navigate('Service')} style={styles.title}>Roadside Assistance</Text>
    <Separator /> 

    <Text onPress={() => navigation.navigate('UserInput')} style={styles.title}>Enter Details</Text>
    <Separator /> 

    <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.text}>Logout</Text>
    </Pressable>
      
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
  },  
});
