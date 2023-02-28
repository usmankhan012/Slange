
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import Imagepath from '../assets/Imagepath';
// import { images } from '../../assets';

const slides = [
    {
        key: 1,
        title: 'Lorem Ipsum 1',
        text: 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo  consequat.',
        image: Imagepath.Imagepath.swiper1
    },
    {
        key: 2,
        title: 'Lorem Ipsum 1',
        text: 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo  consequat.',
        image: Imagepath.Imagepath.swiper2
    },
    {
        key: 3,
        title: 'Lorem Ipsum 1',
        text: 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo  consequat.',
        image: Imagepath.Imagepath.swiper3
    },
];

const SlanseSwiper = ({ navigation }) => {
    const sliderRef = useRef();

    const onLastSlide = (index, lastIndex) => {
        if (slides[index].key == slides.length) {
            setTimeout(() => {
                navigation.navigate('Login')
            }, 1000)
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <SafeAreaView style={styles.slide}>
                <Image source={item?.image} style={styles.imageStyle} resizeMode={'cover'} />
                <View style={styles.infoContainer}>
                    <View style={styles.infoTextCon}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <AppIntroSlider
            ref={sliderRef}
            data={slides}
            showSkipButton={false}
            showNextButton={false}
            showDoneButton={false}
            renderItem={renderItem}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            onSlideChange={onLastSlide}
        />
    )
}
export default SlanseSwiper;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        marginTop:hp(3)
    },
    text: {
        paddingTop: hp(2),
        paddingHorizontal: wp(8),
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        marginTop:hp(3)

    },
    activeDotStyle: {
        width: wp(6),
        height: hp(1.5),
        backgroundColor: '#25378C',
    },
    dotStyle: {
        width: wp(3),
        height: hp(1.4),
        backgroundColor: '#25378C',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: hp(9)
    },
    infoTextCon: {
        paddingTop: hp(3),
        alignItems: 'center',
    },
    buttonContainer: {
        padding: hp(2.1),
        alignSelf: 'center',
        borderRadius: hp(1.5),
    },
    imageStyle: {
        width: wp(100),
        height: hp(60)
    }
});


// import React, { useRef, useState } from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { ScaledSheet } from "react-native-size-matters";
// import Imagepath from "../assets/Imagepath";
// import Swiper from 'react-native-swiper';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { horizontalScale, moderateScale, verticalScale } from '../themes/Metrics';


// const SlanseSwiper = ({ navigation }) => {
//     const [swiperr, setswiperr] = useState()
//     const swiperRef = useRef()
//     const swiperbtn = (a) => {
//         setswiperr(a)
//     }

//     return (
//         <View style={styles.contener}>

//             <Swiper
//                 onIndexChanged={e => setswiperr(e)}
//                 ref={swiperRef}
//                 dotStyle={{}}
//                 activeDotStyle={{}}
//             >

//                 <View>
//                     <Image style={styles.swiperimg} source={Imagepath.Imagepath.swiper1} />
//                     <Text style={styles.lorem}>
//                         Lorem ipsum dolor sit amet, consectetur  adipiscing elit,
//                         ed do eiusmod tempor incididunt ut labore  et dolore
//                         magna aliqua.Ut enim ad minim veniam, quis nostrud
//                         exercitation  ullamco laboris nisi ut aliquip ex ea
//                         commodo  consequat.
//                     </Text>
//                     <TouchableOpacity onPress={() => swiperr == '2' ? navigation.navigate('Login') : swiperRef.current.scrollBy(1)}
//                         style={styles.buttonStyle} >
//                         <Text style={styles.textStyle}>Next</Text>
//                     </TouchableOpacity>

//                 </View>
//                 <View>
//                     <Image style={styles.swiperimg} source={Imagepath.Imagepath.swiper2} />
//                     <Text style={styles.lorem}>
//                         Lorem ipsum dolor sit amet, consectetur  adipiscing elit,
//                         ed do eiusmod tempor incididunt ut labore  et dolore
//                         magna aliqua.  Ut enim ad minim veniam, quis nostrud
//                         exercitation  ullamco laboris nisi ut aliquip ex ea
//                         commodo  consequat.
//                     </Text>
//                     <TouchableOpacity onPress={() => swiperr == '2' ? navigation.navigate('Login') : swiperRef.current.scrollBy(1)}
//                         style={styles.buttonStyle} >
//                         <Text style={styles.textStyle}>Next</Text>
//                     </TouchableOpacity>

//                 </View>
//                 <View>
//                     <Image style={styles.swiperimg} source={Imagepath.Imagepath.swiper3} />
//                     <Text style={styles.lorem}>
//                         Lorem ipsum dolor sit amet, consectetur  adipiscing elit,
//                         ed do eiusmod tempor incididunt ut labore  et dolore
//                         magna aliqua.  Ut enim ad minim veniam, quis nostrud
//                         exercitation  ullamco laboris nisi ut aliquip ex ea
//                         commodo  consequat.
//                     </Text>
//                     <TouchableOpacity onPress={() => swiperr == '2' ? navigation.navigate('Login') : swiperRef.current.scrollBy(1)}
//                         style={styles.buttonStyle} >
//                         <Text style={styles.textStyle}>Next</Text>
//                     </TouchableOpacity>

//                 </View>

//             </Swiper >

//         </View >
//     )
// }

// export default SlanseSwiper;
// const styles = ScaledSheet.create({
//     contener: {
//         flex: 1
//     },
//     swiperimg: {
//         // resizeMode: 'contain',
//         height: hp(60),
//         width: wp(100)
//     },
//     lorem: {
//         fontSize: '16@s',
//         fontWeight: '400',
//         textAlign: 'center', color: '#000000',
//         marginTop: '30@s',
//         fontFamily: Imagepath.font.Bold
//     },
//     buttonStyle: {
//         width: wp(90),
//         paddingLeft: wp(3),
//         marginTop: hp(1.3),
//         paddingVertical: hp(1),
//         backgroundColor: '#E00A28',
//         alignSelf: 'center'
//     },
//     textStyle: {
//         color: 'white',
//         textAlign: 'center',
//         fontWeight: '400',
//         fontSize: 16
//     },
// })