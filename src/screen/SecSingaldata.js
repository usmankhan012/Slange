import React, { useState } from "react";
import { View, Image, StatusBar, Text, TouchableOpacity, ScrollView, Share, } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Imagepath from "../assets/Imagepath";

const SecSingaldata = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
        } catch (error) {
            alert(error.message);
        }
    };
    const [like, setlike] = useState()
    const likebtn = () => {
        setlike(!like)
    }

    const [location, setlocation] = useState()
    const locationbtn = () => {
        setlocation(!location)
    }

    const [share, setshare] = useState()
    const sharebtn = () => {
        setshare(!share)
    }
    const [report, setreport] = useState()
    const reportbtn = () => {
        setreport(!report)
    }
    return (
        <ScrollView>
            <View style={styles.contener}>
                <View style={styles.BorderViewFlatlist}></View>
                <View >
                    {/* <TouchableOpacity >
                        <Text style={styles.brandtext}>McGettigans JLT</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity onPress={item.onpress}>
                    <Text style={styles.brandtext}>{item.brandname2}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={item.onpress}>
                    <Text style={styles.brandtext}>{item.brandname3}</Text>
                </TouchableOpacity> */}
                </View>
                <View style={styles.barview}>
                    <Image style={styles.barimg} source={Imagepath.Imagepath.userBar} />
                    {/* <View style={styles.golview}>
                        <Image style={styles.firstBrand2} source={Imagepath.Imagepath.McGetting} />
                    </View> */}

                    <TouchableOpacity
                        onPress={() => locationbtn()} style={styles.BottmViewGoal}>
                        <Image style={{ tintColor: location ? 'red' : 'gray' }} source={Imagepath.Imagepath.mapmarker} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => likebtn()}
                        style={styles.BottmViewGoal2}>
                        <Image style={{ tintColor: like ? 'red' : 'gray' }} source={Imagepath.Imagepath.heart} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => sharebtn&&onShare()}
                        style={styles.BottmViewGoal3}>
                        <Image style={{ tintColor: share ? 'red' : 'gray' }} source={Imagepath.Imagepath.share} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => reportbtn()}
                        style={[styles.reportBtn, {
                            borderWidth: scale(1), borderColor: report ? 'red' : 'white'
                        }]}>
                        <Text style={styles.reportT}>Report</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.lorem1View}>
                    <Text style={styles.lorem1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et est eu lacus interdum pulvinar ultricies sit amet nisl. In purus libero, tempor in felis vel, auctor fermentum ipsum.
                    </Text>
                </View>
                <View style={styles.lorem1View2}>
                    <Text style={styles.redlorem}>SAY WHEN:  <Text style={styles.blaclorem}> November 28, 2022 - 5pm TO 9pm</Text>
                        {'\n'}SAY WHERE: <Text style={styles.blaclorem}>Mcgettigans JLT, Bonnigtons Hotel</Text></Text>
                </View>

                <View style={styles.lorem12View}>
                    <Text style={styles.blaclorem}> SAY MORE:   This is the shit from the backend... </Text>
                    <TouchableOpacity>
                        <Text style={styles.blaclorem}>more</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    )
}
export default SecSingaldata;
const styles = ScaledSheet.create({
    contener: {
        flex: 1,
        backgroundColor: 'white'
    },
    brandtext: {
        fontSize: '18@s',
        color: '#020202',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '45@s',
        marginLeft: '8@s'
    },
    barimg: {
        resizeMode: 'contain',
        marginTop: '6@s'
    },
    golview: {
        width: wp(25),
        height: hp(12),
        backgroundColor: 'white',
        position: 'absolute',
        bottom: '330@s',
        left: '10@s',
        borderRadius: '50@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '1@s',
        borderColor: 'lightgray'
    },
    firstBrand2: {
        width: wp(22),
        resizeMode: 'contain'
    },
    // BottmViewGoal: {
    //     width: wp(13),
    //     height: hp(6),
    //     backgroundColor: 'white',
    //     position: 'absolute',
    //     top: '340@s',
    //     left: '70@s',
    //     borderRadius: '55@s',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // borderWidth: '1@s',
    //     // borderColor: 'lightgray'
    // },
    barview: {
        marginTop: '15@s'
    },
    BottmViewGoal: {
        width: wp(13),
        height: hp(6),
        backgroundColor: 'white',
        position: 'absolute',
        bottom: hp(-3.2),
        left: wp(19),
        borderRadius: '55@s',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: '1@s',
        // borderColor: 'lightgray'
    },
    BottmViewGoal2: {
        width: wp(13),
        height: hp(6),
        backgroundColor: 'white',
        position: 'absolute',
        bottom: hp(-3.2),
        left: wp(37),
        borderRadius: '55@s',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: '1@s',
        // borderColor: 'lightgray'
    },
    BottmViewGoal3: {
        width: wp(13),
        height: hp(6),
        backgroundColor: 'white',
        position: 'absolute',
        bottom: hp(-3.2),
        left: wp(55),
        borderRadius: '55@s',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: '1@s',
        // borderColor: 'lightgray'
    },
    reportBtn: {
        width: wp(16),
        // padding: '1@s',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: hp(-1),
        left: wp(79),
        borderRadius: '7@s',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: '1@s',
        // borderColor: 'red'
    },
    reportT: {
        color: '#E00A28',
        fontSize: '12@s',
        fontWeight: '400'
    },
    lorem1View: {
        paddingHorizontal: '12@s',
        marginTop: scale(15)
    },
    lorem1View2: {
        paddingHorizontal: '12@s',
    },
    lorem1: {
        fontSize: '10@s',
        fontWeight: '400',
        color: '#171717',
        marginTop: '30@s'
    },
    redlorem: {
        color: 'red',
        fontSize: '10@s',
        fontWeight: '400',
        marginTop: '8@s'
    },
    blaclorem: {
        color: 'black',
        fontSize: '10@s',
        fontWeight: '400'
    },
    lorem12View: {
        paddingHorizontal: '10@s',
        flexDirection: 'row',
        bottom: scale(30),
        marginTop: scale(35)
    },
})