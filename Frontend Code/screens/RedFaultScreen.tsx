// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function RedFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.separator}>
      <Text style={styles.title}>Serious Faults</Text>
        <Text style={styles.title}>Brake System Warning Light</Text>
        <Image source={require('../assets/images/RedFaults/brake_system_warning_light.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        The brake system warning light requires urgent attention. It could be caused that you’ve left the handbrake 
        slightly engaged while pulling away, so it’s best to ensure its fully released. If the light stays on, it 
        is best to seek assistance. The problem could be that your vehicle could have a brake fluid leak, a sensor 
        failure or need the brake pads replacing. 
        Safe to Drive: No
        Check you've released the handbrake fully. If you have, stop, check the brake fluid level, and top it up if 
        you need to. 
      </Text>
      </View>   

   <Separator/>

        <Text style={styles.title}>Battery Warning Light</Text>  
        <Image source={require('../assets/images/RedFaults/Battery.jpg')}
        style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        This warning light can indicate a number of issues, all relating to the cars battery and charging system. 
        This is a particular problem at night because a faulty battery can lead to headlights failing, but without 
        the battery or charging system providing electricity, you may find power steering, brake servos or the engine
        itself stop working. 
        Safe to Drive: No
        In this case it would be best to stop the vehicle in a safe place, turn off the engine and contact roadside 
        assistance or your local mechanic. It is advised not to restart the engine as it could make the problem worse.
        </Text>  
        </View>  

        <Separator/>

        <Text style={styles.title}>ABS Warning Light</Text>  
        <Image source={require('../assets/images/Red/abs_warning_light.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        There is a problem with your vehicle’s anti-lock brake system or brake assist system, and you should schedule 
        service with an automotive professional as soon as possible.
        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Coolant Temperature Warning Light</Text>  
        <Image source={require('../assets/images/Red/coolant_temperature_warning_light.jpg')}
        style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        Switch off the engine immediately and do not drive any further. Check the coolant level (see manual)
        1. Is the coolant level, ok?
        Yes: The overheating may be caused by a malfunction of the cooling system. Please contact roadside assistance. 
        No: Add more coolant. Restart the engine. Go to step 2.
        2. Has the warning light gone out?
        Yes: Continue driving. No: The overheating may be caused by a malfunction of the cooling system. 
        Please contact roadside assistance.
        </Text>
        </View>
        <Separator/>

        <Text style={styles.title}>Engine Warning Light</Text>  
        <Image source={require('../assets/images/Red/engine_warning_light.jpg')}
        style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        A red engine management light means that there is a very serious problem. If you see this, you should stop at the 
        nearest safe place and call roadside assistance straight away.
        </Text>
        </View> 
        
        <Separator/>

        <Text style={styles.title}>Tyre Pressure Warning Light</Text>  
        <Image source={require('../assets/images/Red/tyre_pressure_monitoring_warning_light.png')}
        style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        You might see this light more often than others, especially when the seasons change and temperatures fluctuate. 
        If the light is red, it means your tire had deflated rapidly and you should stop driving at the safest 
        possible time.
        </Text>
        </View>


        <Separator/>

        <Text style={styles.title}>Recharge AdBlue</Text>  
        <Image source={require('../assets/images/Red/adblue_update.jpg')}
        style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        The red warning appears when there is no AdBlue range left; once this happens the car will not restart 
        once the ignition is turned off. This is not a fault, but a required feature of the system. If this stage 
        is reached the system will need a full top-up before the car can be restarted. 
        Further information is available in the vehicle handbook.
        </Text>
        </View>

  <Separator/>

        <Text style={styles.title}>Electronic Parking Brake</Text>  
        <Image source={require('../assets/images/Red/parking_brake_update.jpg')}
        style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        The electronic parking brake is switched on while you are driving. As soon as it is safe to do so, pull over 
        and disable the parking brake before continuing your journey. Once the electric parking brake has been disabled, 
        the warning light will switch off. If the warning remains illuminated, please contact an authorised mechanic.
        </Text>
        </View>

        <Separator/>

        <Text style={styles.title}>Engine Oil Pressure</Text>
        <Image source={require('../assets/images/Red/engine_oil_pressure_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          1. Switch off the engine immediately and do not restart. Check the oil level. Oil level ok: Please contact 
          roadside assistance. Oil level not ok: Add more oil until it is at the correct level. Start the engine, let 
          it run for five seconds, monitor the warning lamp, then switch off the engine.
          2. Does the light go out after 5 seconds? Yes: Continue driving. No: Please contact roadside assistance.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Front Assist</Text>
        <Image source={require('../assets/images/Red/front_assist_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          Front Assist has detected a risk of collision. Brake immediately or take evasive action. The warning light will 
          deactivate when the collision risk has passed. If the light does not deactivate, please contact your nearest 
          authorised mechanic for assistance.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Power Assisted Steering</Text>
        <Image source={require('../assets/images/Red/power_steering_red_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          1. Remove the ignition key for 30 seconds and then start the engine. Does the light go out? Yes: The problem is 
          rectified. No: Go to step 2.
          2. Can you drive to an authorised repairer safely? Yes: If you can drive safely, please take caution while 
          driving. No: If you cannot drive safely, please contact roadside assistance.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Steering Lock</Text>
        <Image source={require('../assets/images/Red/steering_lock_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          What colour is the warning lamp? Red: Do not drive the vehicle. Please contact an authorised mechanic. 
          Yellow: There is a malfunction in the electronic steering lock. 
          Drive without delay to an authorised mechanic to have the system examined.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Airbag & Seat Belt System</Text>
        <Image source={require('../assets/images/Red/airbag_seatbelt_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          If this lamp lights up or flashes, there is a fault in the airbag or seatbelt system. Drive carefully to an authorised 
          mechanic without delay and have the fault rectified. 
          Have the fault in the airbag examined; otherwise, the system may fail to trigger an accident.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Bonnet</Text>
        <Image source={require('../assets/images/Red/bonnet_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          Check that the bonnet is closed properly. Has the warning light gone out? 
          Yes: No further action required. No: Please contact an authorised mechanic.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Boot Lid</Text>
        <Image source={require('../assets/images/Red/boot_lid_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          Check that the boot lid is closed properly. Has the warning light gone out? 
          Yes: No further action required. No: Please contact an authorised mechanic.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Doors</Text>
        <Image source={require('../assets/images/Red/doors_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          Check that all doors are closed properly. Has the warning light gone out? Yes: No further action required. 
          No: Please contact an authorised mechanic.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Seat Belt Buckles</Text>
        <Image source={require('../assets/images/Red/seat_belt_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          This lamp appears if the driver or front passenger has not got their seat belts fastened, make sure they have 
          been fastened.
          1. Has the driver fastened his or her seat belt properly? Yes: Seatbelts are fastened properly: Go to question 2. 
          No: Seatbelts are not fastened properly. Fasten seatbelts properly. Go to question 2.
          2. Has the warning light gone out? Yes: No further action required. No: Please contact an authorised mechanic.
          </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Ignition Switch</Text>
        <Image source={require('../assets/images/Red/ignition_switch_update.jpg')}
          style={{ height: 200, width: 250, resizeMode: 'stretch', }} />
        <View style={styles.box}>
          <Text style={styles.text}>
          Red: Do not switch off the ignition as you might not be able to switch it on again. 
          Drive without delay to an authorised mechanic to have the system examined.
          Yellow: There is a malfunction in the ignition switch. Drive without delay to an 
          authorised mechanic to have the system examined.
          </Text>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#737373',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
