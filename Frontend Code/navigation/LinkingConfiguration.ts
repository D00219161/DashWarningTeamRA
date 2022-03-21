/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Signin: {
            screens: {
              SigninScreen: 'signin',
            },
          }, 
          CreateAccount: {
            screens: {
              CreateAccountScreen: 'createaccount',
            },
          }, 
          Scan: {
            screens: {
              ScanScreen: 'scan',
            },
          }, 
          Scanning: {
            screens: {
              ScanningScreen: 'scanning',
            },
          },  
          Display: {
            screens: {
              DisplayScreen: 'display',
            },
          },   
          Service: {
            screens: {
              ServiceScreen: 'service',
            },
          }, 
          MostCommonFaults: {
            screens: {
              MostCommonFaultsScreen: 'mostcommonfaults',
            },
          }, 
          RedFault: {
            screens: {
              RedFaultScreen: 'redfaults',
            },
          },
          AmberFault: {
            screens: {
              AmberFaultScreen: 'amberfaults',
            },
          },
          GreenFault: {
            screens: {
              GreenFaultScreen: 'greenfaults',
            },
          },
          ElectricFault: {
            screens: {
              ElectricFaultScreen: 'electricfaults',
            },
          },
          Forum: {
            screens: {
              ForumScreen: 'forum',
            },
          },
          UserInput: {
            screens: {
              UserInputScreen: 'userinput',
            },
          },
          QA: {
            screens: {
              QAScreen: 'QA',
            },
          },
          UserAccount: {
            screens: {
              UserAccountScreen: 'useraccount', //ISSUE
            },
          },
          NavBar:{
            screens: {
              NavBarScreen: 'navbar',
            },
          },
      },
    },
    Nav: 'modal',
    NotFound: '*',
    },
  },
};

export default linking;
