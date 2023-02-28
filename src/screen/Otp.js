import React from "react";
import { ImageBackground,  View, Text, Image, TouchableOpacity, } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import OTPTextInput from 'react-native-otp-textinput';
import { SafeAreaView } from "react-native-safe-area-context";
import Imagepath from "../assets/Imagepath";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const Otp = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.conatiner}>
            <ImageBackground
                style={styles.imagebackground}
                source={Imagepath.Imagepath.loginback}
            >
                {/* <KeyboardAvoidingView behavior='position' style={styles.conatiner}> */}
                <View style={styles.logoContainer}>
                    <View>
                        <Image source={Imagepath.Imagepath.frame} style={styles.logoImage} resizeMode={'contain'} />
                    </View>
                    <View style={styles.inputContainer}>
                        <OTPTextInput
                            tintColor='red'
                            inputCount={4}
                            offTintColor='lightgray'
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('NewPassword')} style={styles.buttonStyle} >
                            <Text style={styles.textStyle}>Virify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </KeyboardAvoidingView> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Otp;
const styles = ScaledSheet.create({
    conatiner: {
        flex: 1
    },
    imagebackground: {
        flex: 1,
        height:hp(100),

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
        paddingBottom: hp(4)
    },
    buttonStyle: {
        width: wp(75),
        paddingLeft: wp(3),
        paddingVertical: hp(1),
        backgroundColor: '#E00A28',
        borderRadius: wp(2),
        marginTop: hp(4)
    },
    textStyle: {
        color: 'white',
        textAlign: 'center'
    },
})