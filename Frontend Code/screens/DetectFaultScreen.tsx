// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert, Pressable, ScrollView, SwipeableListView } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import CButton from "./CButton";

const Separator = () => (
  <View style={styles.separator} />
);

const Separator2 = () => (
  <View style={styles.separator2} />
);

const Separator3 = () => (
  <View style={styles.separator3} />
);


export default function DetectFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
        {/* <Text style={styles.title}>Detect Fault</Text>  */}

        <Separator2/>

        <Text style={styles.title}>What Colour is the Fault?</Text>  

        <Separator2/>

        {/* Red Button */} 
        <Pressable style={styles.buttonR} onPress={() => navigation.navigate('RedFault')}>
        <Text style={styles.text}>Red</Text>
        </Pressable>

        <Separator/>

        {/* Amber Button */} 
        <Pressable style={styles.buttonA} onPress={() => navigation.navigate('AmberFault')}>
        <Text style={styles.text}>Amber</Text>
        </Pressable>

        <Separator/>

        {/* Green Button */} 
        <Pressable style={styles.buttonG} onPress={() => navigation.navigate('GreenFault')}>
        <Text style={styles.text}>Green</Text>
        </Pressable>

        <Separator/>

        {/* Blue Button */} 
        <Pressable style={styles.buttonB} onPress={() => navigation.navigate('BlueFault')}>
        <Text style={styles.text}>Blue</Text>
        </Pressable>

        <Separator/>

      {/* Unused as UI Redesigned */}
        {/* <Text style={styles.title}>How Many Times did it appear</Text> 
        <Pressable style={styles.button} onPress={() => Alert.alert('Button Pressed')}>
        <Text style={styles.text}>1</Text>
        </Pressable>
      
      <Separator/>
      <Pressable style={styles.button} onPress={() => Alert.alert('Button Pressed')}>
        <Text style={styles.text}>2</Text>
        </Pressable>

      <Separator/>
      <Pressable style={styles.button} onPress={() => Alert.alert('Button Pressed')}>
        <Text style={styles.text}>3</Text>
        </Pressable>
      <Separator/>
      <Pressable style={styles.button} onPress={() => Alert.alert('Button Pressed')}>
        <Text style={styles.text}>4</Text>
        </Pressable>
      <Separator/>
        

      <Text style={styles.title}>Did the fault produce any sound?</Text> 
      <View style={styles.parent}>
          <CButton text={"Yes"} />
          <CButton text={"No"} />
        </View> */}
        <Separator3/>
      </View>
      </ScrollView>
  );
}

/*<Pressable style={styles.button2} onPress={() => Alert.alert('Button Pressed')}>
<Text style={styles.text}>Yes</Text>
</Pressable>
<Separator/>
<Pressable style={styles.button2} onPress={() => Alert.alert('Button Pressed')}>
<Text style={styles.text}>No</Text>
</Pressable>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#737373',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 45,
    alignItems: 'center',
    justifyContent:'center', 
  },
  separator3: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent:'center', 
  },
  separator2: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: 20,
    height: 40,
    width: 20,
  },
  button: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#17A99A',
  },
  buttonR: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FF0000',
  },
  buttonA: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFBF00',
  },
  buttonG: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00FF00',
  },
  buttonB: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0000FF',
  },
});
