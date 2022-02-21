import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function UserAccountScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>User Account</Text>     
        <Separator />  
        <div>
        <Button title="Go to Scan" onPress={() => navigation.navigate('Scan')} />
        <Separator />
        <Button title="Go back to User Account" onPress={() => navigation.goBack()} />
        </div>
      </ScrollView>
  );
}

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
    width: '80%',
  },
  button:{
      backgroundColor: '#17A99A',
      
  },
});
