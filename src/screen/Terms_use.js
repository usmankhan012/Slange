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


const Terms_use = ({navigation}) => {


    return (
        <ScrollView style={styles.mainvew}>
            <View style={styles.fristvew}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backicone} source={Imagepath.Imagepath.backarrow} />
                </TouchableOpacity>
                <Text style={styles.privesitxt}>Terms of Use</Text>
            </View>

            <TouchableOpacity style={{ marginTop: scale(35) }}>
                <Text style={styles.scendtxt}>Terms and Policies</Text>
            </TouchableOpacity>

            <View style={{ marginTop: scale(15) }}>
                <Text style={styles.whtattxt}>Terms of Use</Text>
            </View>
            <View>
                <Text style={styles.loremtxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.

                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of

                    Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.

                    Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker .</Text>
            </View>
        </ScrollView>
    );
}



export default Terms_use;
const styles = ScaledSheet.create({
    mainvew: {
        flex: 1,
        paddingHorizontal: 15
    },
    fristvew: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '44@s'

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
        fontSize: '16@s',
        fontWeight: '400',
        color: '#25378C',
        lineHeight: '20@s'
    },
    whtattxt: {
        fontSize: '20@s',
        fontWeight: '700',
        lineHeight: '20@s',
        color: '#000000'
    },
    loremtxt:{
        fontSize:'15@s',
        fontWeight:'300',
        lineHeight:'20@s',
        color:'#000000',
        marginBottom:'10@s'
    }

});