// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function RedFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.separator}>
      <Text style={styles.title}>Red Faults - Serious</Text>
      <View style={styles.box}>
        <View style={styles.inner}>
        <Text style={styles.title}>Brake System Warning Light</Text>
        <Image source={require('../assets/images/RedFaults/BrakeSystemWarningLight.jpg')}/>
        <Text style={styles.text}>
        The brake system warning light requires urgent attention. 
        It could be caused that you’ve left the handbrake slightly engaged while pulling away, so it’s best to ensure its fully released.
        The problem could be that your vehicle could have a brake fluid leak, a sensor failure or need the brake pads replacing. 
        It is best to get this checked out by your local mechanic.
Safe to drive?
Yes – Only if the brake fluid levels are ok, it could be a sensor fault. In this case it is safe to drive to a mechanics to get checked. 
No – If you need to press your brake further than usual, if the pedal feels spongy when you press it, or sinks all the way to the floor this could indicate that your hydraulic brake circuits may have failed. It is best to pull over and request help. 
Next Step
Check you've released the handbrake fully. 
If you have, stop, check the brake fluid level and top it up if you need to. 
Your owner's manual will tell you how.
          </Text>   
        </View>
      </View>
      
      <View style={styles.box}>
        <View style={styles.inner}>
        <Text style={styles.title}>Battery Warning Light</Text>   
        <Text style={styles.text}>
        This warning light can indicate a number of issues, all relating to the cars battery and charging system. 
        This is a particular problem at night because a faulty battery can lead to headlights failing, but without the battery or charging system providing electricity, you may find power steering, brake servos or the engine itself stop working. 
        The cause of the warning light may be as simple as a faulty battery that’ll need replacing. 
        But it could also be due to a problem with the car’s wiring or, more seriously, a fault with its alternator or drive belt. 
        Other signs of a failing battery could be dim headlights or an engine that’s reluctant to start.
Safe to drive?
No – If the battery light is red while driving, it is best to have the fault looked at immediately as the battery may not be charging. 
Next Step
In this case it would be best to stop the vehicle in a safe place, turn off the engine and contact roadside assistance or your local mechanic. 
It is advised not to restart the engine as it could make the problem worse.
          </Text>    
          </View>
        </View>
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
  text: {

  },
});
