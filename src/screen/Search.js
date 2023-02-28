import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScaledSheet } from "react-native-size-matters";
import Imagepath from "../assets/Imagepath";
import RBSheet from "react-native-raw-bottom-sheet";

const Search = () => {
    const [selectedValue, setSelectedValue] = useState("option1");

    return (
        <View style={styles.contener}>
            <View style={styles.framview}>
                <Image style={styles.frame} source={Imagepath.Imagepath.frame} />
            </View>
            <View style={styles.inputeview}>
                <TextInput style={styles.inpute} />
                <TouchableOpacity style={styles.searchbtn}>
                    <Image style={styles.search} source={Imagepath.Imagepath.search} />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'red' }}>
                {/* <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={300}
                    openDuration={250}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }}                                                           
                >
                    <YourOwnComponent />
                </RBSheet> */}
            </View>
        </View>
    )
}
export default Search;
const styles = ScaledSheet.create({
    contener: {
        flex: 1,
        // padding: '20@s'
    },
    framview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40@s'
    },
    frame: {
        resizeMode: 'contain',
        width: wp(40),
        height: hp(4),
    },
    inputeview: {
        marginTop: '20@s',
        alignItems: 'center'
    },
    inpute: {
        width: wp(90),
        borderWidth: '1@s',
        borderColor: 'lightgray',
        borderRadius: '10@s',
        fontSize: '14@s',
        color: 'black',
        padding: '6@s',
        paddingHorizontal: '10@s',
        // position:'relative'

    },
    search: {
        width: wp(5),
        height: hp(3),
        resizeMode: 'contain',
        tintColor: 'gray'
    },
    searchbtn: {
        position: 'absolute',
        right: '25@s',
        top: '10@s',
    },

    drawerButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#333',
        borderRadius: 5,
        alignSelf: 'flex-start',
    },

})