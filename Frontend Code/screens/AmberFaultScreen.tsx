// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, ScrollView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function AmberFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.separator}>
      <Text style={styles.title}>Warning Faults</Text>
        <Text style={styles.title}>Tyre Pressure Monitoring</Text>
        <Image source={require('../assets/images/Amber/tyre_pressure_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
        <View style={styles.box}>
        <Text style={styles.text}>
        1. Check and if necessary, adjust the tyre pressure on all wheels. Store the tyre pressures using the menu 
        display or by pressing the "set" button.  Has the light gone out? Yes: Continue driving and remember to check 
        the tyre pressures frequently. No: Go to step 2.
        2. Check all the tyre pressures again. Are they all, ok? Yes: Store the tyre pressures again using the menu 
        display or by pressing the "Set" button. Go to step 3. No: Have the tyre repaired or replaced.
        3. Has the light gone out? Yes: Continue driving and remember to check the tyre pressures frequently. 
        No: Drive carefully to an authorised mechanic to have the tyre pressure monitoring system examined.
          </Text>
          </View>
        
        <Separator />

        <Text style={styles.title}>Airbag & Seat Belt System</Text>
         <Image source={require('../assets/images/Amber/airbag_and_seatbelt_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         If this lamp lights up or flashes, there is a fault in the airbag or seatbelt system. Drive carefully to an 
         authorised repairer without delay and have the fault rectified. Have the fault in the airbag and seat belt 
         system examined without delay; otherwise, the system may fail to trigger in an accident.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Anti-lock Brake System</Text>
         <Image source={require('../assets/images/Amber/abs_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         There is an Anti-lock brake system fault. The vehicle can still be braked in the normal way, but the ABS and 
         ESP may not function. Drive carefully to an authorised mechanic to have the ABS system examined. 
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Automatic Gearbox</Text>
         <Image source={require('../assets/images/Amber/automatic_gearbox_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         There is a Gearbox malfunction. If this light appears it may be accompanied with a message in the driver 
         information system, such as:
          1. "Please press brake pedal and select gear again", Is the brake still on? Yes: The hand brake is on. 
          Please contact an authorised mechanic. No: The hand brake is not on. Continue driving.
          2. "Please adapt driving style", If so, please continue driving as normal.
          3. "You can continue driving", 4. "reverse gear not available" & 5. "Please stop the vehicle and select P",
           Please contact a mechanic as soon as possible.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Diesel Particulate Filter</Text>
         <Image source={require('../assets/images/Amber/diesel_particulate_filter_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         1) How many warning lights are on? One: Go to step 2.
         2. Is the fuel low warning light on? Yes: The light is on. Refuel the vehicle. No: The light is not on. Go to step 3.
         3. Drive at least 60Km/hr @ engine speed between 1800-2500rpm, at least 15 minutes until light goes out. 
         Did the light go out? Yes: The light did go out. Filter successfully regenerated. No: Go to step 4.
         4. Can you take the vehicle to your closest authorised mechanic? Yes: If you can take your vehicle, drive safely.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Electronic Stability Programme</Text>
         <Image source={require('../assets/images/Amber/eletronic_stability_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         1. Is the ESP light on constantly or does it flash on sometimes while driving? Flash sometimes: If the ESP light 
         flashes while the vehicle is in motion, the ESP or traction control system is intervening. This is a normal feature. 
         On constantly: The ESP light may be constantly lit if the "ESP off" button was pressed. The ESP can be reactivated by
          switching off the ignition and then on again. If the ESP light goes off, the system is fully functional. Go to step 2.
        2. Is the ESP light still on? Yes: The ESP light is still on. The vehicle can still be braked in the normal way. 
        No: The ESP light is not on. The customer does not need to take any further action and can continue driving.
        If the ESP light is on continuously, you should contact your mechanic to have the system checked.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Engine Management Light</Text>
         <Image source={require('../assets/images/Amber/emissions_control_lamp_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         1. Does the lamp flash or light permanently? Permanently: Remove the key for 30 seconds then refit and start the
        engine. Go to step 2. Flash: Go to step 2.
        2. Is the vehicle vibrating and down on power? Yes: Contact roadside assistance. No: Go to step 3.
        3. Can you take it to an authorised repairer safely? Yes: Take caution while driving to an authorised mechanic.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Engine Oil Level</Text>
         <Image source={require('../assets/images/Amber/engine_oil_level_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         A yellow engine oil level light means you should stop the car as soon as it's safe to. Is the lamp lit continuously
        or is it flashing? Lit continuously: Top up the engine oil as soon as possible. Flashing: The sensor for checking the 
        oil level may be faulty. Check the oil level and top up if necessary. View car manual or contact a mechanic.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Tank Cap Yellow Warning</Text>
         <Image source={require('../assets/images/Amber/fuel_tank_cap_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The fuel tank cap has not been properly closed.  When safe to do so, pull over and securely close the cap. 
         If the warning remains on once the cap is securely closed, please contact your nearest authorised mechanic.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Low Fuel Level</Text>
         <Image source={require('../assets/images/Amber/low_fuel_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The fuel in the fuel tank has reached the reserve level. Drive to a filling station without delay and put fuel into the
         fuel tank. A red arrow by the warning means reserve fuel is being used. Refill your tank as soon as possible. 
         If the warning stays on after the car has been refilled, please contact your nearest authorised mechanic.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Power Steering System</Text>
         <Image source={require('../assets/images/Amber/power_steering_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         1. Has the battery been disconnected, discharged or vehicle jump started? Yes: Turn the steering wheel fully left, 
         then fully right, and drive for a short distance at 15-20 km/h. The lamp should go out. Go to step 2. No: Go to 
        step 3.
        2. Has the lamp gone out? Yes: The problem is rectified. Visit your nearest authorised mechanic at your convenience 
        to have the system checked. No: Go to step 3.
        3. Can you drive to an authorised mechanic safely? Yes: If can drive, drive safely. No: If you can't drive, 
        please contact roadside assistance.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Bulb Monitoring</Text>
         <Image source={require('../assets/images/Amber/bulb_monitoring_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         Check the operation of all exterior bulbs. Have the defective bulb replaced without delay.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Brake Lights</Text>
         <Image source={require('../assets/images/Amber/brake_lights_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         This warning lamp appears when an exterior brake light bulb is defective. Check the operation of all the exterior 
         brake light bulbs. Have the defective bulb replaced without delay.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Headlight Range Control</Text>
         <Image source={require('../assets/images/Amber/headlight_range_control_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         There is a fault in the headlight range control system. Please contact an authorised mechanic.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Lane Assist</Text>
         <Image source={require('../assets/images/Amber/lane_assist_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         This indicator light comes on when the lane assist system is switched on and road markings cannot be detected. 
         If this indicator light comes on accompanied with the message "system fault", contact your local mechanic.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Rain & Light Sensor</Text>
         <Image source={require('../assets/images/Amber/rain-and-light-sensor-update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The wipers and lights will not function automatically but will still function manually. 
         Please contact an authorised mechanic.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Rear Fog Lights</Text>
         <Image source={require('../assets/images/Amber/rear_fog_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         This warning lamp signifies that the rear fog lamp is switched on. Only operate the rear fog lamp in foggy conditions 
         to avoid dazzling the traffic behind you.
        </Text>
        </View>
        
        <Separator />

        <Text style={styles.title}>Rear Spoiler</Text>
         <Image source={require('../assets/images/Amber/rear_spoiler_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         There is a fault in the rear spoiler system. Please contact an authorised mechanic. Do not exceed 120 km/h.
        </Text>
        </View>

        <Separator />

        <Text style={styles.title}>  Windscreen Washer Fluid Level</Text>
         <Image source={require('../assets/images/Amber/wind_screen_washer_fluid_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
        The windscreen washer fluid reservoir is nearly empty. Top up the fluid for the windscreen washer 
        (refer to the owner’s manual).
        </Text>
        </View>

        <Separator />

        <Text style={styles.title}>Adaptive Light System</Text>
         <Image source={require('../assets/images/Amber/adaptive_light_system_update.jpg')}
         style = {{height: 200, width: 250,resizeMode : 'stretch',}} />
         <View style={styles.box}>
         <Text style={styles.text}>
         The headlights will not dip automatically. The dipped headlights will still operate manually. 
         Safe to Drive: Yes. They will only work manually so it is best to get them checked out by a mechanic. 
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
