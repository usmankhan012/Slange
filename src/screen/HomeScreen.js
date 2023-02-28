import React, { useState } from "react";
import { FlatList, Image, Share, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { scale, ScaledSheet } from "react-native-size-matters";
import Imagepath from "../assets/Imagepath";

const HomeScreen = ({ navigation }) => {
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
    const [like, setlike] = useState('')


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
    const DATA = [
        {
            brandname: 'McGettigans JLT', screenname: 'BrandDetail', barimg: Imagepath.Imagepath.Bar,
            brandImg1: Imagepath.Imagepath.McGetting, markerimg: Imagepath.Imagepath.mapmarker,
            heartImg: Imagepath.Imagepath.heart, shareimg: Imagepath.Imagepath.share,
            report: 'Report', lorem1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
            firstredlorem: 'SAY WHEN: ', time: ' November 28, 2022 - 5pm TO 9pm', secredlorem: ' \nSAY WHERE:',
            addres: 'Mcgettigans JLT, Bonnigtons Hotel', moredetail: 'SAY MORE:   This is the shit from the backend... ',
            morebtn: 'more', id: '1'
        },
        {
            brandname: 'SHANGRI-LA', screenname: 'UserProfile', barimg: Imagepath.Imagepath.userBar,
            brandImg1: Imagepath.Imagepath.Shangri, markerimg: Imagepath.Imagepath.mapmarker,
            heartImg: Imagepath.Imagepath.heart, shareimg: Imagepath.Imagepath.share,
            report: 'Report', lorem1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
            firstredlorem: 'SAY WHEN: ', time: ' November 28, 2022 - 5pm TO 9pm', secredlorem: ' \nSAY WHERE:',
            addres: 'Mcgettigans JLT, Bonnigtons Hotel', moredetail: 'SAY MORE:   This is the shit from the backend... ',
            morebtn: 'more', id: '2'
        },
        {
            brandname: 'Cheesecake Factory', screenname: '', barimg: Imagepath.Imagepath.Bar,
            brandImg1: Imagepath.Imagepath.CheasFactry, markerimg: Imagepath.Imagepath.mapmarker,
            heartImg: Imagepath.Imagepath.heart, shareimg: Imagepath.Imagepath.share,
            report: 'Report', lorem1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus',
            firstredlorem: 'SAY WHEN: ', time: ' November 28, 2022 - 5pm TO 9pm', secredlorem: ' \nSAY WHERE:',
            addres: 'Mcgettigans JLT, Bonnigtons Hotel', moredetail: 'SAY MORE:   This is the shit from the backend... ',
            morebtn: 'more', id: '3'
        },

    ];
    const DATA2 = [
        {
            firstlogo: Imagepath.Imagepath.McGetting,
            screenname: 'BrandDetail'
        },
        {
            firstlogo: Imagepath.Imagepath.Shangri,
            screenname: 'UserProfile'
        },
        {
            firstlogo: Imagepath.Imagepath.CheasFactry,
            screenname: ''
        },
        {
            firstlogo: Imagepath.Imagepath.McGetting
        },
        {
            firstlogo: Imagepath.Imagepath.Shangri
        },
        {
            firstlogo: Imagepath.Imagepath.CheasFactry
        },
    ]


    const renderItem = ({ item }) => (
        <View style={styles.contener}>
            <View style={styles.flatkistView}>
                <TouchableOpacity onPress={() => navigation.navigate(item.screenname)}>
                    <Text style={styles.brandtext}>{item.brandname}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.barimg} source={item.barimg} />
                <View style={styles.golview}>
                    <Image style={styles.firstBrand2} source={item.brandImg1} />
                </View>


                <View style={{width:'100%',alignItems:'center',}}>
                    <TouchableOpacity 
                        onPress={() => locationbtn(item.id)} style={styles.BottmViewGoal}>
                        <Image style={{ tintColor: location == item.id ? 'red' : 'gray', height: 25, width: 25, resizeMode: 'contain', }} source={item.markerimg} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => likebtn(item.id)}
                        style={styles.BottmViewGoal2}>
                        <Image style={{ tintColor: like == item.id ? 'red' : 'gray', height: 25, width: 25, resizeMode: 'contain' }} source={item.heartImg} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => sharebtn && onShare()}
                        style={styles.BottmViewGoal3}>
                        <Image style={{ tintColor: share == item.id ? 'red' : 'gray', height: 25, width: 25, resizeMode: 'contain' }} source={item.shareimg} />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => reportbtn()}
                        style={[styles.reportBtn, {
                            borderWidth: scale(1), borderColor: report == item.id ? 'red' : 'white'
                        }]}
                        >
                     <Image style={{height:30,width:30,resizeMode:'contain'}} source={Imagepath.heart}/>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.lorem1View}>
                <Text style={styles.lorem1}>{item.lorem1}</Text>
            </View>
            <View style={styles.lorem1View2}>
                <Text style={styles.redlorem}>{item.firstredlorem} <Text style={styles.blaclorem}>{item.time}</Text>
                    {item.secredlorem} <Text style={styles.blaclorem}>{item.addres}</Text></Text>
            </View>

            <View style={styles.lorem12View}>
                <Text style={styles.blaclorem}>{item.moredetail}</Text>
                <TouchableOpacity>
                    <Text style={styles.blaclorem}>{item.morebtn}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
    const renderItem2 = ({ item }) => (
        <View style={styles.BeandView}>
            <TouchableOpacity onPress={() => navigation.navigate(item.screenname)}>
                <Image style={styles.firstBrand} source={item.firstlogo} />
            </TouchableOpacity>

        </View>
    );

    return (
        <View style={styles.menview}>
            <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
            <View>
                <Image style={styles.frame} source={Imagepath.Imagepath.frame} />
            </View>
            <View>
                <FlatList data={DATA2}
                    horizontal
                    renderItem={renderItem2}
                    keyExtractor={item => item.id} />
            </View>

            <View style={styles.BorderViewFlatlist}></View>

            {/* <View style={styles.BorderView}></View> */}
            <View style={styles.flatkistView}>
                <FlatList data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />
            </View>
        </View >
    )
}
export default HomeScreen

const styles = ScaledSheet.create({
    menview: {
        flex: 1,
        backgroundColor:'white'

    },
    frame: {
        resizeMode: 'contain',
        width: wp(30),
        // height: hp(13),
        marginLeft: '10@s',
        marginTop: '15@s'
    },
    BeandView: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: '10@s',
        alignItems: 'center',
        bottom: '15@s'
    },
    firstBrand: {
        width: wp(30),
        resizeMode: 'contain'
    },
    secBrand: {
        width: wp(30),
        resizeMode: 'contain',
        marginLeft: '13@s'
    },
    thirdBrand: {
        width: wp(30),
        resizeMode: 'contain',
        // marginLeft:'8@s'
    },
    BorderView: {
        backgroundColor: 'rgba(211, 202, 207, 0.8)',
        width: wp(100),
        height: hp(0.2),
        // marginTop: '20@s'
    },
    brandtext: {
        fontSize: '18@s',
        color: '#020202',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '45@s',
        marginLeft: '10@s'
    },
    barimg: {
        resizeMode: 'contain',
        marginTop: '6@s',
    },
    golview: {
        width: wp(25),
        height: hp(12),
        backgroundColor: 'white',
        position: 'absolute',
        top: hp(-7.2),
        left: wp(3),
        borderRadius: '50@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '1@s',
        borderColor: 'lightgray'
    },
    firstBrand2: {
        width: wp(20),
        resizeMode: 'contain'
    },
    BottmViewGoal: {
        width: wp(13),
        height: hp(6),
        backgroundColor: 'white',
        position: 'absolute',
        bottom: hp(-3.2),
        left: wp(27),
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
        left: wp(42),
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
        left: wp(58),
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
        fontSize: '14@s',
        fontWeight: '400',
        color: '#171717',
        marginTop: '17@s'
    },
    redlorem: {
        color: 'red',
        fontSize: '13@s',
        fontWeight: '400',
        marginTop: '8@s'
    },
    blaclorem: {
        color: 'black',
        fontSize: '13@s',
        fontWeight: '400'
    },
    lorem12View: {
        paddingHorizontal: '10@s',
        flexDirection: 'row'
    },
    flatkistView: {
        flex: 1
    },
    BorderViewFlatlist: {
        // marginTop: '15@s',
        backgroundColor: 'rgba(211, 202, 207, 0.8)',
        width: wp(100),
        height: hp(0.2),
    },

})