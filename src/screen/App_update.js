/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';


const App_update = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState1 => !previousState1);
    return (
        <SafeAreaView style={styles.mainvew}>
            <View style={styles.fristvew}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backicone} source={Imagepath.Imagepath.backarrow} />
                </TouchableOpacity>
                <Text style={styles.privesitxt}>App update settings</Text>
            </View>

            <View style={styles.scondview}>
                <Text style={styles.autotxt}>Auto-update </Text>
                <Switch
                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                    thumbColor={isEnabled ? "#25378C" : "#25378C"}
                    // ios_backgroundColor="#D9D9D9"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={{marginTop:scale(10)}}>
                <Text style={{fontSize:scale(16),color:'#000000',fontWeight:'400'}}>Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>


            <View style={styles.scondview}>
                <Text style={styles.autotxt}>Auto-update </Text>
                <Switch
                    trackColor={{ false: "#D9D9D9", true: "#D9D9D9" }}
                    thumbColor={isEnabled1 ? "#25378C" : "#25378C"}
                    ios_backgroundColor="#D9D9D9"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </View>
            <View style={{marginTop:scale(10)}}>
                <Text style={{fontSize:scale(16),color:'#000000',fontWeight:'400'}}>Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>



        </SafeAreaView>
    );
}



export default App_update;
const styles = ScaledSheet.create({
    mainvew: {
        flex: 1,
        paddingHorizontal: 15
    },
    fristvew: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '40@s'

    },
    backicone: {
        height: '18@s',
        width: '18@s',
        resizeMode: 'contain'
    },
    privesitxt: {
        fontSize: '18@s',
        fontWeight: '700',
        lineHeight: '20@s',
        color: '#000000',
        left: '16@s'
    },
    scondview: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '44@s',
        justifyContent: 'space-between'
    },
    autotxt: {
        fontSize: '18@s',
        fontWeight: '600',
        lineHeight: '20@s',
        color: '#000000'
    }


});