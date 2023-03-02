// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useCallback, useMemo, useRef, useState } from 'react'
// import BottomSheet from 'react-native-bottomsheet-reanimated';
// import Imagepath from '../assets/Imagepath';

// const Timep = () => {

//     const handleSheetChange = useCallback(index => {
//         setSnapIndex(index.index);
//     }, []);

//     const handleSnapPress = useCallback(index => {
//         sheetRef.current?.snapTo(index);
//     }, []);

//     const handleSheetClose = useCallback(() => {
//         sheetRef.current?.snapTo(2);
//     }, []);

//     const snapPoints = useMemo(() => ['78%', '90%', 0], []);
//     const sheetRef = useRef();

//     const filterRenderItem = () => {
//         return (
//             <View style={{ paddingHorizontal: ScreenRatio(4) }}>
//                 <Text>dsfsdf</Text>
//             </View>
//         )
//     }

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={() => { handleSnapPress(0); }} style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
//                 <Image source={Imagepath.Imagepath.frame}
//                     style={styles.filterIconCss}
//                 />
//             </TouchableOpacity>

//             <BottomSheet
//                 tipHeaderRadius={10}
//                 bottomSheerColor={Colors.white}
//                 ref={sheetRef}
//                 initialPosition={0}
//                 snapPoints={snapPoints}
//                 isBackDrop={false}
//                 isBackDropDismissByPress={false}
//                 isRoundBorderWithTipHeader={true}
//                 enabledBottomInitialAnimation={true}
//                 onChangeSnap={handleSheetChange}
//                 dragEnabled={true}
//                 body={
//                     filterRenderItem()
//                 }
//             />
//         </View>
//     );
// };

// export default Timep;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 10
//     },
//     filterIconCss: {
//         height: 60,
//         width: 60,
//         resizeMode: 'contain'
//     },

// })