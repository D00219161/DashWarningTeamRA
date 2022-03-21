// Linking Screens Together
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createAppContainer } from "react-navigation";

//Screens
import HomeScreen from "../screens/HomeScreen";
import MostCommonFaultsScreen from "../screens/MostCommonFaultsScreen";
import RedFaultScreen from "../screens/RedFaultScreen";
import AmberFaultScreen from "../screens/AmberFaultScreen";
import GreenFaultScreen from "../screens/GreenFaultScreen";
import QAScreen from "../screens/QAScreen";
import ServiceScreen from "../screens/ServiceScreen";
import UserInputScreen from "../screens/UserInputScreen";

const screens = {
    Home: {
        screen: HomeScreen
    },
    QA: {
        screen: QAScreen
    },
    MostCommonFaults: {
        screen: MostCommonFaultsScreen
    },
    RedFaults: {
        screen: RedFaultScreen
    },
    AmberFaults: {
        screen: AmberFaultScreen
    },
    GreenFaults: {
        screen: GreenFaultScreen
    },
    Service: {
        screen: ServiceScreen
    },
    UserInput: {
        screen: UserInputScreen
    }
}

const HomeStack = createNativeStackNavigator(screens);

export default createAppContainer(HomeStack);
