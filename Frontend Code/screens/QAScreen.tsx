// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import CButton from "./CButton";

const Separator = () => (
  <View style={styles.separator} />
);

export default function QAScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>Detect Fault Q&A</Text>   

        <Text style={styles.title}>What Colour if the Fault</Text>   
        <Pressable style={styles.button} onPress={() => navigation.navigate('RedFault')}>
        <Text style={styles.text}>Red</Text>
        </Pressable>

        <Separator/>

        <Pressable style={styles.button} onPress={() => navigation.navigate('AmberFault')}>
        <Text style={styles.text}>Amber</Text>
        </Pressable>

        <Separator/>
        <Pressable style={styles.button} onPress={() => navigation.navigate('GreenFault')}>
        <Text style={styles.text}>Green / Blue</Text>
        </Pressable>

        <Text style={styles.title}>How Many Times did it appear</Text> 
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
        </View>
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
    width: "20%",
    height: "30%",
  },
  box:{
    width: '100%',
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#17A99A',
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: 20,
    height: 40,
    width: 20,

  },
});
