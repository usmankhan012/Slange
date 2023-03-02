/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';


const Open_source = ({navigation}) => {


    return (
        <ScrollView style={styles.mainvew}>
            <View style={styles.fristvew}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backicone} source={Imagepath.Imagepath.backarrow} />
                </TouchableOpacity>
                <Text style={styles.privesitxt}>Open source libraries</Text>
            </View>

            <TouchableOpacity style={{ marginTop: scale(35) }}>
                <Text style={styles.scendtxt}>Third Party Notices</Text>
            </TouchableOpacity>


            <View style={{ marginTop: scale(15) }}>
                <Text style={styles.lorem2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
            </View>


            <View style={{ marginTop: scale(15) }}>
                <Text style={styles.whtattxt}>Where does it come from?</Text>
            </View>
            <View>
                <Text style={styles.loremtxt}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure
                    Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
            </View>

            <View style={{marginTop:scale(20)}}>
                <Text style={styles.lasttxt}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            </View>
        </ScrollView>
    );
}



export default Open_source;
const styles = ScaledSheet.create({
    mainvew: {
        flex: 1,
        paddingHorizontal: 15
    },
    fristvew: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '45@s'

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
    scendtxt: {
        fontSize: '18@s',
        fontWeight: '700',
        color: '#25378C',
        lineHeight: '20@s',
        textAlign: 'center'
    },
    whtattxt: {
        fontSize: '20@s',
        fontWeight: '700',
        lineHeight: '20@s',
        color: '#000000'
    },
    loremtxt: {
        fontSize: '15@s',
        fontWeight: '300',
        lineHeight: '20@s',
        color: '#000000',
        marginBottom: '10@s',
        top: '19@s'
    },
    lorem2: {
        fontSize: '15@s',
        fontWeight: '300',
        color: '#000000',
        lineHeight: '20@s'
    },
    lasttxt:{
        fontSize:'15@s',
        fontWeight:'300',
        color:'#000000'
    }

});