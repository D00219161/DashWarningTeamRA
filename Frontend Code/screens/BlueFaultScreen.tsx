// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function BlueFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.separator}>
      <Text style={styles.title}>Indicator Faults</Text>
      <Text style={styles.title}>High or Low Beam Indicators</Text>
         <Image source={require('../assets/images/Blue/HighBeamIndicators.gif')}
          style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The light is active only when the high beams are active (turned on) and has been a standard in vehicles for decades. 
         It is one of only a select few presented in a blue colour and features what is supposed to be the image of 
         an old-style headlamp with lines coming out from it. 
         Low Beam On indicator shows the lines pointing out from the headlamp pointing down. 
         These are not faults but it is good to check regularly for blown blues in your headlamps. 
         </Text>
        </View>
        
        <Separator/>
        
  
         <Text style={styles.title}>Automatic Headlight Dimmers</Text>
         <Image source={require('../assets/images/Blue/AutomaticHeadlightsSymbol.gif')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The system is also known as the High Beam Assistant. 
         The symbols indicates that the high beams are on, and that the system will automatically (AUTO or A) 
         switch between the low and high headlight beams on the automobile depending on whether or not sensors 
         detect oncoming vehicle head lights in the distance. 
         These are not faults but it is good to check regularly for blown blues in your headlamps. 
         </Text>
          </View>
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
  },
  box:{
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center'
  },
});
