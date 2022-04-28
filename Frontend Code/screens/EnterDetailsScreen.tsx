// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, SafeAreaView, TextInput, Pressable, ScrollView} from 'react-native';
import { onChange } from 'react-native-reanimated';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);
  
export default function EnterDetailsScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [cartype, setCarType] = React.useState('Toyota');
  const [colour, setColour] = React.useState('Red');
  const [description, setDescription] = React.useState('Fault came on 3 times');
  const [timeDetected, setTimeDetected] = React.useState('12 pm noon');
  const [location, setLocation] = React.useState('Dublin City');

  return (
    <ScrollView>
    <View style={styles.container}>
    {/* <Text style={styles.title}>Enter Fault Details</Text>    */}
    
    <Separator/>
    <Text style={styles.title}>Enter Car Type or Make</Text> 
    <TextInput 
    style={styles.input}
    placeholder='e.g. Toyota '
    onChangeText={(val) => setCarType(val)}
    />
    <Text> cartype: {cartype} </Text>

    <Separator/>
    <Text style={styles.title}>Enter Colour of Fault</Text> 
    <TextInput 
    style={styles.input}
    placeholder='e.g. Red '
    onChangeText={(val) => setColour(val)}
    />
    <Text> colour: {colour} </Text>
    
    <Separator/>
    <Text style={styles.title}>Describe Fault</Text> 
    <TextInput 
    style={styles.input}
    placeholder='e.g. Fault is flashing '
    onChangeText={(val) => setDescription(val)}
    />
    <Text> description: {description} </Text>

    <Separator/>
    <Text style={styles.title}>Enter Time Detected</Text>  
    <TextInput 
    style={styles.input}
    placeholder='e.g. 12 pm noon '
    onChangeText={(val) => setTimeDetected(val)}
    />
    <Text> timeDetected: {timeDetected} </Text>
     
    <Separator/>
    <Text style={styles.title}>Enter Location</Text>
    <TextInput 
    style={styles.input}
    placeholder='e.g. Dublin N4  '
    onChangeText={(val) => setLocation(val)}
    />
    <Text> location: {location} </Text>  

    <Separator/>

    <Pressable style={styles.button} onPress={() => navigation.navigate('MostCommonFaults')}>
    <Text style={styles.text}>Suggest Fault</Text>
    </Pressable>   

    <Separator/>
  </View>
  </ScrollView>
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  separator: {
    flex: 1,
    marginVertical: 8,
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '60%',
  },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
      alignItems: 'center',
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
  });
