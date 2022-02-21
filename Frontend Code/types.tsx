// React Navigation
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// NavBar
/**export type createDrawerNavigator ={
  Home: undefined;
  CreateAccount: undefined;
  Signin: undefined;
  UserAccount: undefined;
  Scan: undefined;
  Scanning: undefined;
  Display: undefined;
  Service: undefined;
  MostCommonFaults: undefined;
  RedFault: undefined;
  AmberFault: undefined;
  GreenFault: undefined;
  ElectricFault: undefined;
  Forum: undefined;
};**/

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Home: undefined;
  CreateAccount: undefined;
  Signin: undefined;
  UserAccount: undefined;
  Scan: undefined;
  Scanning: undefined;
  Display: undefined;
  Service: undefined;
  MostCommonFaults: undefined;
  RedFault: undefined;
  AmberFault: undefined;
  GreenFault: undefined;
  ElectricFault: undefined;
  Forum: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// Number of Screens - Roots (Either Numbers or Name of Pages) - Linking
export type RootTabParamList = {
  Home: undefined;
  CreateAccount: undefined;
  Signin: undefined;
  UserAccount: undefined;
  Scan: undefined;
  Scanning: undefined;
  Display: undefined;
  Service: undefined;
  MostCommonFaults: undefined;
  RedFault: undefined;
  AmberFault: undefined;
  GreenFault: undefined;
  ElectricFault: undefined;
  Forum: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>

>;
