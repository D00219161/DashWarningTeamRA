// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, Pressable, ImageBackground, ScrollView, FlatList, StatusBar,SafeAreaView} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

// const dataList = [{id: '1', title: 'Batter Fault', src: '../assets/images/RedFaults/Battery.jpg'}, 
// {id: '2', title: 'Brake System Fault', src: '../assets/images/RedFaults/brake_system_warning_light.jpg'}, 
// {id: '3', title: 'Door & Bonnet Fault', src: '../assets/images/RedFaults/door_bonnet_warning_light.jpg'}]
// const numColumns = 3

//const RedImage = require("../assets/images/RedFaults/BrakeSystemWarningLight.jpg"); <Image source={RedImage}></Image>

export default function MostCommonFaultsScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
    <View style={styles.separator}>
      {/* <Text style={styles.title}>Most Common Faults</Text> */}
      <Text onPress={() => navigation.navigate('RedFault')} style={styles.title}>Red Faults</Text>
      <Image source={require('../assets/images/Red/abs_warning_light.jpg')} 
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />     
      <Image source={require('../assets/images/Red/Battery.jpg')} 
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} /> 
      <Image source={require('../assets/images/Red/brake_system_warning_light.jpg')} 
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} /> 
      <Image source={require('../assets/images/Red/coolant_temperature_warning_light.jpg')} 
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} /> 
      <Image source={require('../assets/images/Red/engine_warning_light.jpg')} 
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} /> 
      <Image source={require('../assets/images/Red/tyre_pressure_monitoring_warning_light.png')} 
      style = {{height: 200, width: 250, resizeMode : 'stretch',}} />   

      <Separator />

      <Text onPress={() => navigation.navigate('AmberFault')} style={styles.title}>Amber Faults</Text>
      <View style={styles.box}>
        <Image source={require('../assets/images/Amber/abs_update.jpg')}
        style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
        <Image source={require('../assets/images/Amber/engine_oil_level_update.jpg')}
        style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
        <Image source={require('../assets/images/Amber/brake_lights_update.jpg')}
        style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
        <Image source={require('../assets/images/Amber/diesel_engine_management_update.jpg')}
        style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
        <Image source={require('../assets/images/Amber/tyre_pressure_update.jpg')}
        style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
        <Image source={require('../assets/images/Amber/low_fuel_update.jpg')}
        style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
        </View>

      <Separator />

      <Text onPress={() => navigation.navigate('GreenFault')} style={styles.title}>Green Faults</Text>
      <View style={styles.box}>
      <Image source={require('../assets/images/Green/adaptive_cruise_control_update.jpg')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
      <Image source={require('../assets/images/Green/cruise_control_update.jpg')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
      <Image source={require('../assets/images/Green/electronic_parking_brake_update.jpg')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
      <Image source={require('../assets/images/Green/lane_assist_green_update.jpg')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />   
      <Image source={require('../assets/images/Green/Automatic_Shift_Lock_Light.jpg')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
      <Image source={require('../assets/images/Green/LowBeamIndicators.gif')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
      </View>

      <Separator />
      <Text onPress={() => navigation.navigate('BlueFault')} style={styles.title}>Blue Faults</Text>
      <View style={styles.box}>
      <Image source={require('../assets/images/GreenFaults/AutomaticHeadlightsSymbol.gif')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
      <Image source={require('../assets/images/GreenFaults/HighBeamIndicators.gif')}
      style = {{height: 200, width: 250, justifyContent:'space-between', marginBottom: 10, resizeMode : 'stretch',}} />
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
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  box:{
    padding: 8,
  },
  inner:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
image: {
 flex: 1,
justifyContent: "center",
},
  item: {
  backgroundColor: '#f9c2ff',
  height: 150,
  justifyContent: 'center',
  marginVertical: 8,
  marginHorizontal: 16,
  padding: 20,
 },
});
