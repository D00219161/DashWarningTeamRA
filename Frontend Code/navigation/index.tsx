/** React Navigation*/
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

//Pages
import HomeScreen from '../screens/HomeScreen';
import SigninScreen from '../screens/SigninScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import ScanScreen from '../screens/ScanScreen';
import ScanningScreen from '../screens/ScanningScreen';
import DisplayScreen from '../screens/DisplayScreen';
import ServiceScreen from '../screens/ServiceScreen';
import ForumScreen from '../screens/ForumScreen';
// Fault Pages
import MostCommonFaultsScreen from '../screens/MostCommonFaultsScreen';
import RedFaultScreen from '../screens/RedFaultScreen';
import AmberFaultScreen from '../screens/AmberFaultScreen';
import GreenFaultScreen from '../screens/GreenFaultScreen';
import ElectricFaultScreen from '../screens/ElectricFaultScreen';


import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/** A root stack navigator ://reactnavigation.org/docs/modal */
const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal'}}>
        <Stack.Screen name="Modal" component={ModalScreen} />

        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Scanning" component={ScanningScreen} />
        <Stack.Screen name="Display" component={DisplayScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="MostCommonFaults" component={MostCommonFaultsScreen} />
        <Stack.Screen name="RedFault" component={RedFaultScreen} />
        <Stack.Screen name="AmberFault" component={AmberFaultScreen} />
        <Stack.Screen name="GreenFault" component={GreenFaultScreen} />
        <Stack.Screen name="ElectricFault" component={ElectricFaultScreen} />
        <Stack.Screen name="Forum" component={ForumScreen} />
        <Stack.Screen name="UserAccount" component={UserAccountScreen} />
        
      </Stack.Group>
    </Stack.Navigator>
  );
}


/** A bottom tab Navigator https://reactnavigation.org/docs/bottom-tab-navigator */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Dash Warning',
          tabBarIcon: ({ color }) => <TabBarIcon name="" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')} //Renders User Account Screen - Could render NavBar
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <MaterialIcons 
                name="menu"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
                />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          title: 'Roadside Assistance',
          tabBarIcon: ({ color }) => <TabBarIcon name="" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MostCommonFaults"
        component={MostCommonFaultsScreen}
        options={{
          title: 'Most Common Faults',
          tabBarIcon: ({ color }) => <TabBarIcon name="" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/** Icons */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}


