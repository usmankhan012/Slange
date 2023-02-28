import React, { useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, ImageBackground, Image, View, Text, TouchableOpacity, TextInput, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { images } from '../../assets';
import { Input, Button } from '../../component';
import Imagepath from '../assets/Imagepath';

const Login = ({ navigation }) => {

    // const emailBor = () => {
    //     setEmailborder(!emailborder)
    // }
    // const [passlborder, setpasslborder] = useState()

    // const [text, setText] = useState('');
    // const handleBlur = () => {
    //     if (text.length < 8) {
    //         ToastAndroid.show("place enter your name", ToastAndroid.SHORT);
    //     }
    // };
    // const [pass, setpass] = useState('');
    // const passbtn = () => {
    //     if (text.length < 8) {
    //         ToastAndroid.show("place enter your password", ToastAndroid.SHORT);
    //     }
    // };

    const ref = React.useRef()
    return (
        <SafeAreaView style={styles.conatiner}>
            <ImageBackground
                style={styles.imagebackground}
                source={Imagepath.Imagepath.loginback}
            >
                {/* <KeyboardAvoidingView behavior='position' style={styles.conatiner}> */}

                <View style={styles.logoContainer}>
                    <View>
                        <Image source={Imagepath.Imagepath.frame}
                            style={styles.logoImage} resizeMode={'contain'} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={[styles.inputStyle,
                            // {
                            //     borderWidth: 0.5, borderColor: emailborder == '' ? 'green' : 'red'
                            // }
                        ]}
                            placeholder={'Username'}
                            placeholderTextColor={'#9E9BA8'}
                            onSubmitEditing={() => ref.current.focus()}
                            autoFocus={false}
                        />
                        <TextInput style={[styles.inputStyle,
                            // {
                            //     borderWidth: 0.5, borderColor: '#9E9BA8',
                            // }
                        ]}
                            placeholder={'Password'}
                            placeholderTextColor={'#9E9BA8'}
                            ref={ref}
                            autoFocus={false}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}
                            style={styles.forgetbtn}>
                            <Text style={styles.forgottext}>Forgot Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} >
                            <Text style={styles.textStyle}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                            <Text style={styles.bottomText}>Don’t have an account? Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </KeyboardAvoidingView> */}
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Login

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
        marginTop: 25
    },
    buttonStyle: {
        width: wp(75),
        paddingLeft: wp(3),
        paddingVertical: hp(1),
        backgroundColor: '#E00A28',

    },
    textStyle: {
        color: 'white',
        textAlign: 'center'
    },
    forgottext: {
        color: '#030303',
        paddingBottom: hp(2),
        fontSize: 16,
        fontWeight: '400'

    },
    bottomText: {
        color: '#030303',
        paddingTop: hp(2),
        fontWeight: '400',
        fontSize: '16@s'
    },
    forgetbtn: {
        alignSelf: 'flex-end'
    },
})