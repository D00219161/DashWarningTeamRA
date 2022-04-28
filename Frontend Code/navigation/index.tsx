/** React Navigation*/
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';

//Pages Used 
import HomeScreen from '../screens/HomeScreen';
import SigninScreen from '../screens/SigninScreen';
import ServiceScreen from '../screens/ServiceScreen';
import MostCommonFaultsScreen from '../screens/MostCommonFaultsScreen';
import RedFaultScreen from '../screens/RedFaultScreen';
import AmberFaultScreen from '../screens/AmberFaultScreen';
import GreenFaultScreen from '../screens/GreenFaultScreen';
import BlueFaultScreen from '../screens/BlueFaultScreen';
import EnterDetailScreen from '../screens/EnterDetailsScreen';
import DetectFaultScreen from '../screens/DetectFaultScreen';

//Pages Not Used
import CreateAccountScreen from '../screens/CreateAccountScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import ScanScreen from '../screens/ScanScreen';
import ScanningScreen from '../screens/ScanningScreen';
import DisplayScreen from '../screens/DisplayScreen';
import ForumScreen from '../screens/ForumScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import NavBarScreen from '../screens/NavBarScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer 
    linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}
// theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}

/** A root stack navigator ://reactnavigation.org/docs/modal */
const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group>
        <Stack.Screen name="Nav" component={NavBarScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="MostCommonFaults" component={MostCommonFaultsScreen} />
        <Stack.Screen name="RedFault" component={RedFaultScreen} />
        <Stack.Screen name="AmberFault" component={AmberFaultScreen} />
        <Stack.Screen name="GreenFault" component={GreenFaultScreen} />
        <Stack.Screen name="BlueFault" component={BlueFaultScreen} />
        <Stack.Screen name="EnterDetails" component={EnterDetailScreen} />
        <Stack.Screen name="DetectFault" component={DetectFaultScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

// Screens Not Used
/*
<Stack.Screen name="Forum" component={ForumScreen} />
<Stack.Screen name="UserAccount" component={UserAccountScreen} />
<Stack.Screen name="Scan" component={ScanScreen} />
<Stack.Screen name="Scanning" component={ScanningScreen} />
<Stack.Screen name="Display" component={DisplayScreen} />
*/


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
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="home" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Nav')} //Renders NavBar
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <MaterialIcons 
                name="menu"
                size={40}
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
          title: 'Roadside Assistance Numbers',
          tabBarIcon: ({ color }) => <TabBarIcon  color={color} name="car" />,
        }}
      />
      <BottomTab.Screen
        name="MostCommonFaults"
        component={MostCommonFaultsScreen}
        options={{
          title: 'Most Common Faults',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="warning" />,
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
 return <FontAwesome size={30} style={{ marginBottom: 5 }} {...props} />;
}


function createStackNavigator() {
  throw new Error('Function not implemented.');
}

