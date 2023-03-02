import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ImageBackground, Image, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { images } from '../../assets';
import Imagepath from '../assets/Imagepath';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import SelectDropdown from 'react-native-select-dropdown'




export const Registration = ({ navigation }) => {

    const ref1 = React.useRef()
    const ref2 = React.useRef()
    const ref3 = React.useRef()
    const ref4 = React.useRef()



    const Gender = ["Male", "Female", "Other"]
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [isdate, setisdate] = useState("Dete of Birth")


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        let dteformate = moment(new Date(date)).format('DD-MM-YYYY');

        setisdate(dteformate)
        hideDatePicker();
    };



    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground
                style={styles.imagebackground}
                source={Imagepath.Imagepath.registerback}
                resizeMode={'stretch'}
            >
                <View style={styles.Container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.titleStyle}>Register</Text>
                        <TextInput style={styles.inputStyle}
                            placeholder={'Username'}
                            placeholderTextColor={'#9E9BA8'}
                            onSubmitEditing={() => ref1.current.focus()}
                            autoFocus={false}
                        />
                        <TextInput style={styles.inputStyle}
                            placeholder={'Password'}
                            placeholderTextColor={'#9E9BA8'}
                            onSubmitEditing={() => ref2.current.focus()}
                            ref={ref1}
                            autoFocus={false}

                        />
                        <TextInput style={styles.inputStyle}
                            placeholder={'Repeat Password'}
                            placeholderTextColor={'#9E9BA8'}
                            ref={ref2}
                            autoFocus={false}


                        />


                        <TextInput style={styles.inputStyle}
                            placeholder={'Email'}
                            placeholderTextColor={'#9E9BA8'}
                            ref={ref2}
                            autoFocus={false}


                        />
                        <View style={styles.twoBoxConatianer}>
                            <View style={{ width: '50%', }}>
                                <TouchableOpacity style={{ width: '96%', height: scale(38), borderRadius: scale(10), alignItems: 'center', justifyContent: 'center', borderColor: '#9E9BA8', borderWidth: 0.5 }} title="Show Date Picker" onPress={showDatePicker} >
                                    <Text style={{ textAlign: 'center' }}>{isdate}</Text>
                                </TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>


                            <View style={{ width: '50%' }}>
                                <SelectDropdown
                                    //    searchPlaceHolder={"Search here"}
                                    //    searchPlaceHolderColor={"#F8F8F8"}

                                    // animationType="slide"
                                   

                                    data={Gender}
                                    buttonStyle={styles.buttan}
                                    buttonTextStyle={{ color: '#000000', alignSelf: 'center' }}
                                    onSelect={(selectedItem, index) => {
                                        // console.log(selectedItem, index)
                                    }}
                                    dropdownStyle={{ borderRadius: 10, width: 100, marginTop:-36,marginLeft:20,}}
                                />

                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('BottamTab')}
                            style={styles.buttonStyle} >
                            <Text style={styles.textStyle}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.bottomText}>Already have an
                                <Text style={styles.accounttext}>account?</Text> Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
};

const styles = ScaledSheet.create({
    conatiner: {
        flex: 1
    },
    imagebackground: {
        flex: 1,
        height: hp(100),

    },
    Container: {
        alignItems: 'center',
        height: hp(50),
        justifyContent: 'center',
        paddingBottom: hp(3.5)
    },
    titleStyle: {
        color: '#030303',
        textAlign: 'center',
        fontSize: '24@s',
        paddingBottom: hp(2),
        fontWeight: '700',
        // marginTop: scale(20)

    },
    inputContainer: {
        height: hp(27),
        width: wp(75),
        alignItems: 'center',
        marginTop: hp(20)
    },
    inputStyle: {
        width: wp(75),
        height: hp(4.8),
        borderWidth: 0.5,
        borderRadius: hp(1),
        borderColor: '#9E9BA8',
        marginBottom: hp(1),
        paddingLeft: wp(4.5),
        paddingBottom: hp(1.25),
        color: '#000000',
        marginTop: scale(15)
    },
    buttonStyle: {
        width: wp(75),
        paddingLeft: wp(3),
        
        paddingVertical: hp(1),
        backgroundColor: '#E00A28',
        // borderRadius: wp(2)
        marginTop:"22@s"
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 16,

    },
    twoBoxConatianer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: scale(10)
    },
    dateOfBirth: {
        width: wp(35),
        height: hp(4.8),
        borderWidth: 0.5,
        borderRadius: hp(1),
        borderColor: '#9E9BA8',
        marginBottom: hp(1),
        paddingLeft: wp(4.5),
        color: '#000000'
    },
    bottomText: {
        color: '#030303',
        paddingTop: hp(2),
        fontWeight: '700',
        fontSize: '16@s',
    },
    accounttext: {
        textDecorationLine: 'underline'
    },
    buttan: {
        width: '100%',
        height: 43,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#9E9BA8',
        backgroundColor: "unsate",
        alignItems:'center',
       

    },
})