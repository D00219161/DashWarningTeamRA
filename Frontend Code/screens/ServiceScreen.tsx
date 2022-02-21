// Roadside Assistance Page
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Button, Alert, Image, TouchableOpacity, Pressable} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const Separator = () => (
  <View style={styles.separator} />
);

export default function ServiceScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roadside Assistance Numbers</Text>
      <Separator />
      <Text style={styles.title}>AA Roadside Assistance</Text>
      <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
      <Text style={styles.text}>0818 66 77 88</Text>
      </Pressable>
     
      <Separator />
      <Text style={styles.title}>Police Service Number</Text>
      <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
      <Text style={styles.text}>111 or 222</Text>
      </Pressable>

      <Separator />
      <Text style={styles.title}>Fire Service Number</Text>
      <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
      <Text style={styles.text}>111 or 222</Text>
      </Pressable>

      <Separator />
      <Text style={styles.title}>Ambulance Service Number</Text>
      <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
      <Text style={styles.text}>111 or 222</Text>
      </Pressable>

      <Separator />
      <Text style={styles.title}>Irish Towing Service Number</Text>
      <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
      <Text style={styles.text}>01 429 8483</Text>
      </Pressable>
      <Separator />
    </View>
  );
}

//  <Button title="01 429 8483" onPress={() => Alert.alert('Simple Button pressed')}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    //color: '#17A99A',
  },
  separator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#17A99A',
  },
});
