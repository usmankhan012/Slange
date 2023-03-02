import React from "react";
import { StatusBar, View, Text, TouchableOpacity, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScaledSheet } from "react-native-size-matters";
import Imagepath from "../assets/Imagepath";
import TopTab2 from "../navigation/TopTab2";

const UserProfile = ({ navigation }) => {
    return (
        <View style={styles.contener}>
            <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
            <View style={styles.hederView}>
                <Image style={styles.frame} source={Imagepath.Imagepath.frame} />
                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.leftarrow} source={Imagepath.Imagepath.leftarrow} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => navigation.navigate('UserProfileData')}>
                    <Image style={styles.menu} source={Imagepath.Imagepath.menu} />
                </TouchableOpacity>
            </View>
            <View style={styles.branddedtail}>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfileData')}>
                    <Image style={styles.firstBrand2} source={Imagepath.Imagepath.userprofile} />
                </TouchableOpacity>
                <View style={styles.brandnameview}>
                    <Text style={styles.brandname}>Steven McEwan</Text>
                </View>
            </View>
            <TopTab2 />
        </View>
    )
}
export default UserProfile
const styles = ScaledSheet.create({
    contener: {
        flex: 1,
        backgroundColor:'white'
    },
    hederView: {
        flexDirection: 'row',
        marginTop: '15@s',
        paddingHorizontal: '15@s',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    frame: {
        resizeMode: 'contain',
        width: wp(27)
    },
    leftarrow: {
        marginLeft: '170@s',
       
    },
    menu: {
        marginLeft: '20@s'
    },
    branddedtail: {
        flexDirection: 'row',
        // height:hp(40)
        marginTop: '30@s',
        bottom: '30@s'

    },
    // golview: {
    //     width: wp(25),
    //     height: hp(12),
    //     backgroundColor: '#FFFFFF',
    //     // position: 'absolute',
    //     // bottom: '330@s',
    //     left: '10@s',
    //     borderRadius: '50@s',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: '2@s',
    //     borderColor: 'lightgray'
    // },
    firstBrand2: {
        width: wp(23),
        height: hp(10),
        resizeMode: 'contain',
        left: '18@s',
        borderRadius: '50@s',
    },
    brandname: {
        color: '#25378C',
        fontSize: '18@s',
        fontWeight: '400',
        // textAlign: 'center'
    },
    brandnameview: {
        justifyContent: 'center',
        // alignItems: 'center'
        marginLeft: '25@s'
    },
})