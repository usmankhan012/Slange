import React from "react";
import { Image, StatusBar, TouchableOpacity, View, Text } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScaledSheet } from "react-native-size-matters";
import Imagepath from "../assets/Imagepath";
import TopTab from "../navigation/TopTab";

const BrandDetail = ({ navigation }) => {
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
                <View style={styles.golview}>
                    <Image style={styles.firstBrand2} source={Imagepath.Imagepath.londonlogo} />
                </View>
                <View style={styles.brandnameview}>
                    <Text style={styles.brandname}>McGettigans JLT</Text>
                    <View style={styles.reverlogoview}>
                        <View style={styles.smallgollview}>
                            <Image source={Imagepath.Imagepath.reverslogo} />
                        </View>
                        <View style={styles.smallgollview}>
                            <Image source={Imagepath.Imagepath.reverslogo} />
                        </View>
                        <View style={styles.smallgollview}>
                            <Image source={Imagepath.Imagepath.reverslogo} />
                        </View>
                        <View style={styles.smallgollview}>
                            <Image source={Imagepath.Imagepath.reverslogo} />
                        </View>
                    </View>
                </View>
            </View>
            <TopTab />
        </View>
    )
}
export default BrandDetail;
const styles = ScaledSheet.create({
    contener: {
        backgroundColor: '#FFFFFF',
        flex: 1
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
        // width: wp(0),
        height: hp(4),
        resizeMode: 'contain'
    },
    menu: {
        marginLeft: '20@s'
    },
    branddedtail: {
        flexDirection: 'row',
        marginTop: '20@s',
        bottom: '20@s',
    },
    golview: {
        width: wp(25),
        height: hp(12),
        backgroundColor: '#FFFFFF',
        // position: 'absolute',
        // bottom: '330@s',
        left: '10@s',
        borderRadius: '50@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2@s',
        borderColor: 'lightgray'
    },
    firstBrand2: {
        width: wp(22),
        resizeMode: 'contain'
    },
    brandname: {
        color: 'black',
        fontSize: '18@s',
        fontWeight: '500',
        // textAlign: 'center'
    },
    brandnameview: {
        justifyContent: 'center',
        // alignItems: 'center'
        marginLeft: '25@s',
        marginTop: '15@s'
    },
    reverlogoview: {
        flexDirection: 'row',
        // margin:'10@s'
    },
    smallgollview: {
        width: wp(10),
        height: hp(5),
        backgroundColor: '#FFFFFF',
        // left: '10@s',
        borderRadius: '50@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2@s',
        borderColor: 'lightgray',
        margin: '3@s'
    },
})