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
import { scale, ScaledSheet } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';
import * as Progress from 'react-native-progress';
import { Svg } from 'react-native-svg';
const Preferences = () => {


    return (
        <ScrollView style={styles.mainvew}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={styles.frestvew}>
                <Image style={styles.imgstyle} source={Imagepath.Imagepath.prefrenseimg} />
            </View>

            <View style={styles.txtvew}>
                <Text style={styles.prfrnsetxt}>My Preferences</Text>
            </View>


            <View style={{ width: '100%', alignItems: 'center', marginTop: scale(17) }}>
                <Progress.Bar progress={0.8} width={250}
                    indeterminate={false}
                />

            </View>

            <View style={styles.vew}>

                <View style={{ flexDirection: 'row', width: '50%' }}>
                    <View style={{ height: scale(25), width: scale(25), borderRadius: scale(50), backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height: scale(15), width: scale(15), borderRadius: scale(50), backgroundColor: '#25378C' }}>

                        </View>
                    </View>

                    <Text style={styles.skmtxt}>5km - 20km</Text>
                </View>

                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                    <Text style={styles.loremtxt}>Lorem Ipsum</Text>
                    <Text style={styles.countrytxt}>Contrary to popular belief</Text>

                </View>
            </View>

            <View style={styles.vew2}>

                <View style={{ flexDirection: 'row', width: '50%' }}>
                    <View style={{ height: scale(25), width: scale(25), borderRadius: scale(50), backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height: scale(15), width: scale(15), borderRadius: scale(50), backgroundColor: '#9B9B9F' }}>

                        </View>
                    </View>

                    <Text style={styles.skmtxt}>25km - 40km</Text>
                </View>

                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                    <Text style={styles.loremtxt}>Lorem Ipsum</Text>
                    <Text style={styles.countrytxt}>Contrary to popular belief</Text>

                </View>
            </View>

            <View style={styles.mapvew}>

                <Text style={styles.maptxt}>Map here...</Text>
            </View>

        </ScrollView>
    );
}



export default Preferences;
const styles = ScaledSheet.create({
    mainvew: {
        flex: 1
    },
    frestvew: {
        marginTop: '30@s',
        width: '100%'
    },
    imgstyle: {
        width: '100%',
        resizeMode: 'contain',
        height: '300@s',
        elevation: '2@s'
    },
    txtvew: {
        width: '100%',
        alignItems: 'center'
    },
    prfrnsetxt: {
        fontSize: '18@s',
        fontWeight: '700',
        lineHeight: '20@s',
        color: '#000000'
    },
    vew: {
        borderWidth: '0.5@s',
        height: '60@s',
        width: '90%',
        alignSelf: 'center',
        borderRadius: '10@s',
        marginTop: '23@s',
        borderColor: '#25378CD6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '10@s',
        justifyContent: 'space-between'
    },
    skmtxt: {
        fontSize: '11@s',
        fontWeight: '300',
        lineHeight: '20@s', color: '#000000',
        left: '15@s'
    },
    loremtxt: {
        fontSize: '13@s',
        fontWeight: '700',
        lineHeight: '20@s', color: '#000000'

    },
    countrytxt: {
        fontSize: '10@s',
        fontWeight: '300',
        lineHeight: '20@s', color: '#000000'

    },
    vew2: {
        borderWidth: '0.5@s',
        height: '60@s',
        width: '90%',
        alignSelf: 'center',
        borderRadius: '10@s',
        marginTop: '23@s',
        borderColor: '#B2B2B5D6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '10@s',
        justifyContent: 'space-between'
    },
    mapvew: {
        width: '90%',
        height: '150@s',
        backgroundColor: '#D9D9D9',
        alignSelf: 'center',
        marginTop: '25@s',
        alignItems: 'center',
        justifyContent: 'center'

    },
    maptxt: {
        fontSize: '15@s',
        fontWeight: '600',
        lineHeight: '20@s',
        color: '#000000'
    }

});