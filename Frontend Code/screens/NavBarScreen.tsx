import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, ScrollView } from 'react-native';
import * as React from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

const Separator2 = () => (
  <View style={styles.separator2} />
);

const Separator3 = () => (
  <View style={styles.separator3} />
);
export default function NavBarScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.container}>
    
     <Separator3 /> 

      <Text onPress={() => navigation.navigate('DetectFault')} style={styles.title}>Detect Fault</Text>
      <Separator2 /> 

      <Text onPress={() => navigation.navigate('MostCommonFaults')} style={styles.title}>Most Common Faults</Text>
      <Text onPress={() => navigation.navigate('RedFault')} style={styles.title}>Red Faults</Text>
      <Text onPress={() => navigation.navigate('AmberFault')} style={styles.title}>Amber Faults</Text>
      <Text onPress={() => navigation.navigate('GreenFault')} style={styles.title}>Green Faults</Text>
      <Text onPress={() => navigation.navigate('BlueFault')} style={styles.title}>Blue Faults</Text>
      <Separator2 /> 

      <Text onPress={() => navigation.navigate('Service')} style={styles.title}>Roadside Assistance</Text>
      <Separator2 /> 

      <Text onPress={() => navigation.navigate('EnterDetails')} style={styles.title}>Enter Details</Text>
      <Separator2 /> 

      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.text}>Logout</Text>
     </Pressable>
        
      <View style={styles.separator}/>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> 
    </View>
    </ScrollView>
  );
}

// Intergration Not Used ATM
/* 
<Text onPress={() => navigation.navigate('Scan')} style={styles.title}>Scan Dashboard</Text>
<Separator /> 
<Text onPress={() => navigation.navigate('Forum')} style={styles.title}>Forum</Text>
<Separator /> 
<Text onPress={() => navigation.navigate('UserAccount')} style={styles.title}>User Account</Text>
<Separator /> 
      */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent:'center', 
  },
  separator3: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent:'center', 
  },
  separator2: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
