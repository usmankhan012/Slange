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
    TextInput,
    TouchableOpacity
} from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const Edit_profile = () => {


    return (
        <ScrollView style={styles.mainvew}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <View style={styles.hederView}>
                <Image style={styles.slangelogo} source={Imagepath.Imagepath.frame} />
            </View>

            <View style={styles.profilvew}>

                <Image style={styles.imagstyl} source={Imagepath.Imagepath.userprofile} />


                <View style={styles.gryvew}>
                    <Image style={styles.grayimg} source={Imagepath.Imagepath.grayvew} />
                    <Image style={styles.pansilimg} source={Imagepath.Imagepath.pancil} />
                </View>

            </View>

            <View style={styles.textvew}>
                <Text style={styles.stecvntxt}>Steven McEwan</Text>
            </View>

            <View style={{ width: '100%', marginTop: scale(35) }}>
                <TextInput style={styles.instyle}
                    placeholder="name:"
                    placeholderTextColor={'#A59292'}
                />
            </View>

            <View style={{ width: '100%', marginTop: scale(15) }}>
                <TextInput style={styles.instyle}
                    placeholder="e-mail id:"
                    placeholderTextColor={'#A59292'}
                />
            </View>


            <View style={{ width: '100%', marginTop: scale(15) }}>
                <TextInput style={styles.instyle}
                    placeholder="phone no:"
                    placeholderTextColor={'#A59292'}
                />
            </View>


            <View style={{ width: '100%', marginTop: scale(15) }}>
                <TextInput style={styles.instyle}
                    placeholder="location "
                    placeholderTextColor={'#A59292'}
                />
            </View>


            <View style={{ width: '100%', marginTop: scale(15) }}>
                <TextInput style={styles.instyle}
                    placeholder="country"
                    placeholderTextColor={'#A59292'}
                />
            </View>

            <View style={styles.butonvew}>

                <TouchableOpacity style={styles.censilbtn}>
                    <Text style={styles.canceltxt}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.savebtn}>
                    <Text style={styles.savetxt}>Save</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}



export default Edit_profile;
const styles = ScaledSheet.create({
    mainvew: {
        flex: 1,
        paddingHorizontal: '22@s'
    },
    hederView: {
        flexDirection: 'row',
        marginTop: '23@s',
        alignItems: 'center',
        width: '100%',

    },

    slangelogo: {
        resizeMode: 'contain',
        width: wp(27)
    },
    profilvew: {
        height: '150@s',
        width: '150@s',
        alignSelf: 'center',
        marginTop: '13@s'

    },
    imagstyl: {
        height: '150@s',
        width: '150@s',
        borderRadius: '80@s',
        overflow: 'hidden',
        resizeMode: 'contain'
    },
    gryvew: {
        alignSelf: 'center',
        marginTop: '120@s',
        position: 'absolute',
        left: '85@s'
    },
    grayimg: {
        height: '45@s',
        width: '45@s'
    },
    pansilimg: {
        height: '23@s',
        width: '23@s',
        position: 'absolute',
        top: '18@s',
        right: '26@s'
    },
    textvew: {
        width: '100%',
        alignItems: 'center',
        marginTop: '22@s'
    },
    stecvntxt: {
        fontSize: '17@s',
        fontWeight: '400',
        color: '#25378C'
    },
    instyle: {
        height: '48@s',
        width: '100%',
        fontSize: '11@s',
        borderBottomWidth: '0.5@s',
        borderColor: '#D7DAEA',


        paddingLeft: '20@s',

    },
    butonvew: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '35@s',
        justifyContent: 'space-between'
    },
    canceltxt: {
        fontSize: '15@s',
        fontWeight: '500',
        color: '#000000'
    },
    censilbtn: {
        width: '44%',
        height: '30@s',
        backgroundColor: '#D9D9D9',
        borderRadius: '30@s',
        alignItems: 'center',
        justifyContent: 'center'
    },
    savetxt: {
        fontSize: '15@s',
        fontWeight: '500',
        color: '#FFFFFF'
    },
    savebtn: {
        width: '44%',
        height: '30@s',
        backgroundColor: '#25378C',
        borderRadius: '30@s',
        alignItems: 'center',
        justifyContent: 'center'
    },

})