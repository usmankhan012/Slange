import React from "react";
import { ImageBackground, TextInput, View, Text, Image, TouchableOpacity, } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import Imagepath from "../assets/Imagepath";

const NewPassword = ({ navigation }) => {
    const refInput1 = React.useRef();
    // const refInput2 = React.useRef();
    return (
        // <SafeAreaView style={styles.conatiner}>
        <ImageBackground
            style={styles.imagebackground}
            source={Imagepath.Imagepath.loginback}
        >

            <View style={styles.logoContainer}>
                <View>
                    <Image source={Imagepath.Imagepath.frame} style={styles.logoImage} resizeMode={'contain'} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputStyle}
                        placeholder={'New  Password'}
                        placeholderTextColor={'#9E9BA8'}
                        onSubmitEditing={() => refInput1.current.focus()}
                        autoFocus={true} />
                    <TextInput style={styles.inputStyle}
                        placeholder={'Conform  Password'}
                        placeholderTextColor={'#9E9BA8'}
                        ref={refInput1} />
                    <TouchableOpacity onPress={() => navigation.navigate('BottamTab')} style={styles.buttonStyle} >
                        <Text style={styles.textStyle}>Conform  Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        // </SafeAreaView>
    )
}

export default NewPassword;

const styles = ScaledSheet.create({
    // conatiner: {
    //     flex: 1
    // },
    imagebackground: {
        flex: 1,
        height: hp(100),

    },
    logoContainer: {
        alignItems: 'center',
        height: hp(55),
        marginTop: hp(20)
    },
    logoImage: {
        width: wp(65),
        height: hp(23),
    },
    inputContainer: {
        width: wp(75),
        alignItems: 'center',
        paddingBottom: hp(4),
    },
    inputStyle: {
        width: wp(75),
        height: hp(4.7),
        borderWidth: 0.5,
        borderRadius: hp(1),
        borderColor: '#9E9BA8',
        marginBottom: hp(1),
        paddingLeft: wp(4.5),
        paddingBottom: hp(1.25),
        color: '#000000',
        marginTop: 25,

    },
    buttonStyle: {
        width: wp(75),
        paddingLeft: wp(3),
        paddingVertical: hp(1.3),
        backgroundColor: '#E00A28',
        borderRadius: wp(2),
        marginTop: hp(4)
    },
    textStyle: {
        color: 'white',
        textAlign: 'center'
    },
})