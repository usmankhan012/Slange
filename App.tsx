/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Route from './src/navigation/Route';


const App=()=>{


  return (
    <SafeAreaView style={styles.mainvew}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

   <Route/>
    </SafeAreaView>
  );
}



export default App;
const styles = StyleSheet.create({
  mainvew:{
flex:1
  },

});