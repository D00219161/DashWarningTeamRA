// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function GreenFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.separator}>
         <Text style={styles.title}>Indicator Faults</Text>
         <Text style={styles.title}>Adaptive Cruise Control</Text>
         <Image source={require('../assets/images/Green/adaptive_cruise_control_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The Adaptive cruise control (ACC), and speed limiter are active. If the warning starts flashing, you have 
         exceeded your maximum speed set on the limiter. Reduce your speed. 
         If the warning continues to flash after you have reduced your speed, please contact an authorised mechanic.
         </Text>
          </View>

          <Separator/>

        <Text style={styles.title}>Cruise Control</Text>
         <Image source={require('../assets/images/Green/cruise_control_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The cruise control light comes on when the cruise control system is activated. This is a normal operating 
         feature of the system. Refer to the owner's manual or contact your nearest authorised repairer for an 
         explanation of the operation of the system. It is safe to drive.
         </Text>
          </View>

          <Separator/>

        <Text style={styles.title}>Electronic Parking Brake</Text>
         <Image source={require('../assets/images/Green/electronic_parking_brake_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The car is being held by the Auto Hold function; you can disable this manually if necessary. For further 
         details on what Auto Hold means and how to disable it manually, please consult your owner’s manual or 
         contact an authorised mechanic.
         </Text>
          </View>

        <Separator/>

        <Text style={styles.title}>Lane Assist</Text>
         <Image source={require('../assets/images/Green/lane_assist_green_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         This indicator lamp comes on when the lane assist system is switched on and road markings can be detected.
         </Text>
          </View>

          <Separator/>

        <Text style={styles.title}>Press Brake Pedal</Text>
         <Image source={require('../assets/images/Green/Automatic_Shift_Lock_Light.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         This lamp only applies to vehicles that are fitted with an automatic transmission. 
         The brake pedal needs to be pressed and held while the gear lever is moved out of the park position.
         </Text>
          </View>

          <Separator/>

         <Text style={styles.title}>High or Low Beam Indicators</Text>
         <Image source={require('../assets/images/Green/LowBeamIndicators.gif')}
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
