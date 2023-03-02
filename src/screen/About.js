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
    Image,
    TouchableOpacity
} from 'react-native';
import Imagepath from '../assets/Imagepath';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScaledSheet } from 'react-native-size-matters';


const About = ({navigation}) => {


    return (
        <ScrollView style={styles.mainvew}>

            <View style={styles.hederView}>
                <Image style={styles.slangelogo} source={Imagepath.Imagepath.frame} />
            </View>

            <View style={styles.aboutvew}>
                <TouchableOpacity  onPress={() => navigation.goBack()}>

                    <Image style={styles.backarrow} source={Imagepath.Imagepath.backarrow} />
                </TouchableOpacity>
                <Text style={styles.aboutxt} >About</Text>
            </View>

            <View style={styles.privsivew}>
                <Text style={styles.privesitxt}>Privacy Policy</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Privacy_police')}>
                    <Image style={styles.rightaro} source={Imagepath.Imagepath.rightarrow} />
                </TouchableOpacity>
            </View>

            <View style={styles.privsivew}>
                <Text style={styles.privesitxt}>Terms of Use</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Terms_use')}>
                    <Image style={styles.rightaro} source={Imagepath.Imagepath.rightarrow} />
                </TouchableOpacity>
            </View>


            <View style={styles.privsivew}>
                <Text style={styles.privesitxt}>Open source libraries</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Open_source')}>
                    <Image style={styles.rightaro} source={Imagepath.Imagepath.rightarrow} />
                </TouchableOpacity>
            </View>

            <View style={styles.privsivew}>
                <Text style={styles.privesitxt}>App updates</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('App_update')}>
                    <Image style={styles.rightaro} source={Imagepath.Imagepath.rightarrow} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}



export default About;
const styles = ScaledSheet.create({
    mainvew: {
        flex: 1,
        paddingHorizontal: 25

    },
    hederView: {
        flexDirection: 'row',
        marginTop: '15@s',
        alignItems: 'center',
        width: '100%',

    },

    slangelogo: {
        resizeMode: 'contain',
        width: wp(27)
    },
    aboutvew: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '20@s',
        alignItems: 'center'
    },
    backarrow: {
        height: '18@s',
        width: '18@s',
        resizeMode: 'contain'
    },
    aboutxt: {
        fontSize: '18@s',
        fontWeight: '700',
        lineHeight: '20@s',
        color: '#000000',
        left: '12@s'

    },
    privesitxt: {
        fontSize: '15@s',
        fontWeight: '400',
        color: '#000000',
        left: '24@s'

    },
    privsivew: {
        marginTop: '33@s',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightaro: {
        height: '22@s',
        width: '22@s',
        resizeMode: 'contain'
    }

});