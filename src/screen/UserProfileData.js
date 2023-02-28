import React from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Imagepath from "../assets/Imagepath";


const UserProfileData = ({ navigation }) => {
    return (
        <View style={styles.contener}>
            <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
            <View style={styles.hederView}>
                <Image style={styles.frame} source={Imagepath.Imagepath.frame} />
                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.leftarrow} source={Imagepath.Imagepath.leftarrow} />
                </TouchableOpacity> */}
                <TouchableOpacity>
                    <Image style={styles.menu} source={Imagepath.Imagepath.menu} />
                </TouchableOpacity>
            </View>
            <View style={styles.branddedtail}>
                <View style={styles.golview}>
                    <TouchableOpacity>
                        <Image style={styles.firstBrand2} source={Imagepath.Imagepath.userprofile} />
                    </TouchableOpacity>
                </View>
                <View style={styles.brandnameview}>
                    <Text style={styles.brandname}>Steven McEwan</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.UserProfileData}>
                    <Image style={styles.window} source={Imagepath.Imagepath.Window} />
                    <View style={styles.profiletextview}>
                        <Text style={styles.profiletext}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserProfileData2}>
                    <Image style={styles.window} source={Imagepath.Imagepath.Window} />
                    <View style={styles.profiletextview}>
                        <Text style={styles.profiletext}>Preferences</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserProfileData2}>
                    <Image style={styles.window} source={Imagepath.Imagepath.Window} />
                    <View style={styles.profiletextview}>
                        <Text style={styles.profiletext}>History</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserProfileData2}>
                    <Image style={styles.window} source={Imagepath.Imagepath.Window} />
                    <View style={styles.profiletextview}>
                        <Text style={styles.profiletext}>About</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserProfileData2}>
                    <Image style={styles.window} source={Imagepath.Imagepath.Window} />
                    <View style={styles.profiletextview}>
                        <Text style={styles.profiletext}>Policies</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default UserProfileData;
const styles = ScaledSheet.create({
    UserProfileData: {
        flexDirection: 'row',
        paddingHorizontal: '20@s',
        // justifyContent:'center',
        alignItems: 'center'
    },
    UserProfileData2: {
        flexDirection: 'row',
        paddingHorizontal: '20@s',
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: '10@s'
    },
    window: {
        resizeMode: 'contain',
    },
    profiletext: {
        fontSize: '18@s',
        fontWeight: '400',
        color: 'black',
        left: '10@s'
    },
    profiletextview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contener: {
        flex: 1
    },
    hederView: {
        flexDirection: 'row',
        marginTop: '15@s',
        paddingHorizontal: '15@s',
        // justifyContent:'center',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    frame: {
        resizeMode: 'contain',
        width: wp(27)
    },
    // leftarrow: {
    //     marginLeft: '170@s'
    // },
    menu: {
        marginLeft: '20@s'
    },
    branddedtail: {
        flexDirection: 'row',
        // height:hp(40)
        marginTop: '30@s',
        bottom: '30@s'
    },
    firstBrand2: {
        width: wp(23),
        height: hp(10),
        resizeMode: 'contain',
        left: '22@s',
        borderRadius: '50@s',
    },
    brandname: {
        color: '#25378C',
        fontSize: '18@s',
        fontWeight: '400',
        left: '8@s',
    },
    brandnameview: {
        justifyContent: 'center',
        // alignItems: 'center'
        marginLeft: '25@s'
    },
})