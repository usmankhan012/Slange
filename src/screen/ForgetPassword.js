import React from "react";
import { ImageBackground, TextInput, View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import Imagepath from "../assets/Imagepath";

const ForgetPassword = ({navigation}) => {
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
                        <TextInput style={styles.inputStyle} placeholder={'Email'} placeholderTextColor={'#9E9BA8'}
                        // value={text}
                        // onChangeText={setText}
                        // onBlur={handleBlur}
                        />
                        {/* <TextInput style={styles.inputStyle} placeholder={'Password'} placeholderTextColor={'#9E9BA8'}
                        value={pass}
                        onChangeText={setpass}
                        onBlur={passbtn} />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}
                        style={styles.forgetbtn}>
                        <Text style={styles.forgottext}>Forgot Password</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                        <Text style={styles.bottomText}>Don’t have an account? Sign up</Text>
                    </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigation.navigate('Otp')} style={styles.buttonStyle} >
                            <Text style={styles.textStyle}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </KeyboardAvoidingView> */}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ForgetPassword;

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