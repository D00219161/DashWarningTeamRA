// Linking Screens Together
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createAppContainer } from '@react-navigation';
import HomeScreen from "../screens/HomeScreen";
import MostCommonFaultsScreen from "../screens/MostCommonFaultsScreen";
import ServiceScreen from "../screens/ServiceScreen";

const screens ={
 Home:{
     screen: HomeScreen
 },
 MostCommonFaults:{
     screen: MostCommonFaultsScreen
 },
 Service:{
     screen: ServiceScreen
 },
}

// const HomeStack = createNativeStackNavigator({screens});

// export default createAppContainer(HomeStack);
