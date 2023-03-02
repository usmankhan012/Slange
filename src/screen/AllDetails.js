import React from "react";
import { FlatList, Image, View, Text } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ScaledSheet } from "react-native-size-matters";
import Imagepath from "../assets/Imagepath";
//     SAY WHEN:  5pm TO 9pm
//SAY WHERE: Mcgettigans JLT

const AllDetails = () => {
    const DATA = [
        {
            img: Imagepath.Imagepath.Rectangle, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'

        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },
        {
            img: Imagepath.Imagepath.Rectangle2, firstredlorem: 'SAY WHEN: ', time: ' 5pm TO 9pm',
            secredlorem: ' \nSAY WHERE:', addres: 'Mcgettigans JLT'
        },

    ];

    const renderItem = ({ item }) => (
        <View>
            <View style={styles.flatmenView}>
                <Image style={styles.img} source={item.img} />
                <View style={styles.lorem1View}>
                    <Text style={styles.redlorem}>{item.firstredlorem} <Text style={styles.blaclorem}>{item.time}</Text>
                        {item.secredlorem} <Text style={styles.blaclorem}>{item.addres}</Text></Text>
                </View>
            </View>
        </View>
    )
    return (
        <View style={styles.contener}>
            <View style={styles.flatlistview}>
                <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />
            </View>

        </View>
    )
}
export default AllDetails;
const styles = ScaledSheet.create({
    flatmenView: {


        paddingHorizontal: '7@s',
        // margin: '2@s',
        marginTop: '20@s',
        bottom: '10@s',
        width: widthPercentageToDP(50),
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        resizeMode: 'contain',

        // borderRadius: '15@s'
        width: widthPercentageToDP(44),
        // bottom:heightPercentageToDP(1)
    },
    redlorem: {
        color: 'red',
        fontSize: '12@s',
        fontWeight: '400',
        marginTop: 2,
    },
    blaclorem: {
        color: 'black',
        fontSize: '12@s',
        fontWeight: '400'
    },
    contener: {
        backgroundColor: 'white'
    },
    // lorem1View: {
    //     paddingHorizontal: '5@s',
    // },

    // flatlistview: {
    //     flex: 1
    // },
})