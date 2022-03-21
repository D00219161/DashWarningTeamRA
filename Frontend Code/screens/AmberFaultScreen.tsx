// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function AmberFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.separator}>
      <Text style={styles.title}>Amber Faults - Common</Text>
      <View style={styles.box}>
        <View style={styles.inner}>
         <Text style={styles.title}>Check Engine Light</Text>
         <Text style={styles.text}>
         If this warning symbol lights up, it is very important to get your car checked, even if it feels completely normal to drive. This light warns of a potential problem with the engine, which you would want to avoid damaging at all. 
         There might me several reasons as to why this light has come on but it usual tends to be faulty sensor or a minor issue (ECU). 
Safe to drive?
Yes – it is safe to drive if there is no loss of power with the car but should be checked as soon as possible. 
No – if the light is flashing while you are driving. 
In this case it is best to stop the car in a safe place, stop the vehicle and restart the car after 2 minutes. 
If it continues to flash, it is best to call for assistance. 
Next Step
Go to your local or nearest garage as soon as possible to figure out what caused the light to come on and to avoid damaging the catalytic converter or the diesel particulate filter. 
         </Text>
          </View>
        </View>
        
      <View style={styles.box}>
        <View style={styles.inner}>
         <Text style={styles.title}>Traction Control Warning Light</Text>
         <Text style={styles.text}>
         This is most commonly seen when the wheels lose grip, usually in the rain or snow. 
         It gives a visual indication that you’re close to the limit of grip. 
         If it’s on constantly, it usually means it’s deactivated – either by a fault or by you switching the system off. 
Safe to drive?
Yes – It is safe to drive with this light as it will appear if you lose grip in bad conditions like rain or snow. 
In these cases, it is best to reduce speed and take it easy. 
Next Step
If the light stays on that could indicate there is a fault in the system, or if you turned it off. 
If you turned it off it is best to turn it back on. If you did not turn if off, then it would be best to seek assistance from a mechanic. 
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
