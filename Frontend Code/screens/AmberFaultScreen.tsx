// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function AmberFaultScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.separator}>
      <Text style={styles.title}>Amber Faults - Common</Text>
      <View style={styles.box}>
        <View style={styles.inner}>
         <Text style={styles.title}>Check Engine Light</Text>
          </View>
        </View>
        
      <View style={styles.box}>
        <View style={styles.inner}>
         <Text style={styles.title}>Traction Control Warning Light</Text>
          </View>
        </View>
    </View>
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
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  box:{
    width: '80%',
    height: '20%',
    padding: 5,
  },
  inner:{
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
