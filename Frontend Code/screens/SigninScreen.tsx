import * as React from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Button, Alert, Pressable, TextInput, ScrollView, StatusBar } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import { TextInput } from 'react-native-gesture-handler';

const Separator = () => (
  <View style={styles.separator} />
);

const Separator2 = () => (
  <View style={styles.separator2} />
);

const Separator3 = () => (
  <View style={styles.separator3} />
);

export default function SigninScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [username, setUsername] = React.useState('roisin');
  const [password, setpassword] = React.useState('password123');

  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
        <Text style={styles.title}>Login To Your Account</Text> 

      < Separator2/>

        <Text style={styles.title}>Enter Username</Text>
        <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setUsername(val)}
        />
        <Text> username: {username} </Text>

        < Separator2/>

        <Text style={styles.title}>Enter Password</Text> 
        <TextInput 
        style={styles.input}
        placeholder='e.g. Password123'
        onChangeText={(val) => setpassword(val)}
        />  
        <Text> password: {password}</Text>

        <Separator/>

        <Pressable style={styles.button} onPress={() => navigation.navigate('MostCommonFaults')}>
        <Text style={styles.text}>Log On</Text>
        </Pressable>   

        <Separator/>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Cancel</Text>
        </Pressable>

        {/* <Text style={styles.title}>Create Account</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.text}>Create</Text>
        </Pressable>  */}

      <Separator3/>
    </View> 
    </ScrollView>
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
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
    //: '#17A99A',
  },
  separator: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent:'center', 
  },
  separator3: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent:'center', 
  },
  separator2: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center',
  },
  button1:{
    backgroundColor: 'green',
    flexDirection: 'row',
    width: '40%',
    height: 40,
  },
  button2:{
    backgroundColor: 'green',
    flexDirection: 'row',
    width: '60%',
    height: 60,
  },
  button: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#17A99A',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '60%',
  }
});
