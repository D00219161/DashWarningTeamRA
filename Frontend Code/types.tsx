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
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
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
  BlueFault: undefined;
  Forum: undefined;
  UserInput: undefined;
  QA: undefined;
  DetectFault: undefined;
  EnterDetails: undefined;
  Nav: undefined;
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
  BlueFault: undefined;
  Forum: undefined;
  UserInput: undefined;
  QA: undefined;
  DetectFault: undefined;
  EnterDetails: undefined;
  NavBar: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>

>;
