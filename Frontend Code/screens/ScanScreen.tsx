import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function ScanScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}></Text>       
        <Button title="Scan" onPress={() => navigation.navigate('Scan')} />
      </View>
  );
}

/** Routing Between Pages
 * <TouchableOpacity onPress={() => navigation.navigate('MostCommonFaults')}style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#17A99A',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
    //: '#17A99A',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});
