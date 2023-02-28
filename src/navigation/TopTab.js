import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';
import AllDetails from '../screen/AllDetails';
import SingaleDetails from '../screen/SingaleDetails';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { height: 45 },
            tabBarActiveTintColor: '#e91e63',
            tabBarStyle: { backgroundColor: 'white' },
            
        }}>
            <Tab.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ height: scale(20), width: scale(20), resizeMode: 'contain', marginTop: scale(8), tintColor: '#898989' }} source={Imagepath.Imagepath.Window} />
                ),
            }}
                name="SingaleDetails" component={SingaleDetails} />


            <Tab.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ height: scale(24), width: scale(24), resizeMode: 'contain', marginTop: scale(8),}} source={Imagepath.Imagepath.days7} />
                ),
            }}
                name="AllDetails" component={AllDetails} />
        </Tab.Navigator>
    );
}
export default TopTab;


// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import BrandDetail from '../screen/BrandDetail';
// import Login from '../screen/Login';
// const RenderBottom = (props) => {
//     const { active, unactive, focused, title } = props
//     return (
//         <View>
//             <Image style={{ height: scale(25), width: scale(25), marginTop: scale(30), resizeMode: 'contain', tintColor: focused ? 'red' : 'gray' }} source={focused ? active : unactive} />
//             <Text style={{ fontSize: 30 }}>{title}</Text>
//         </View>
//     )
// }

// const BoxStack = createMaterialTopTabNavigator();
// function oneprofile() {
//     return (
//         <BoxStack.Navigator>
//             <BoxStack.Screen name="BrandDetail" component={BrandDetail} options={{ headerShown: false }} />
//         </BoxStack.Navigator>
//     );
// }

// function allprofile() {
//     return (
//         <BoxStack.Navigator>
//             <BoxStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//         </BoxStack.Navigator>
//     );
// }
// const Tab = createBottomTabNavigator();


// const TopTab = () => {

//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="BrandDetail" component={oneprofile}
//                 options={{
//                     headerShown: false,
//                     tabBarLable: '',
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <RenderBottom
//                                 active={Imagepath.Imagepath.homeicon}
//                                 unactive={Imagepath.Imagepath.homeicon}
//                                 // title='Check'
//                                 focused={focused}
//                             />

//                         )

//                     }
//                 }} />
//             <Tab.Screen name="Login" component={allprofile}
//                 options={{
//                     headerShown: false,
//                     tabBarLable: '',
//                     tabBarIcon: ({ focused }) => {
//                         return (
//                             <RenderBottom
//                                 active={Imagepath.Imagepath.homeicon}
//                                 unactive={Imagepath.Imagepath.homeicon}
//                                 // title='Check'
//                                 focused={focused}
//                             />

//                         )

//                     }
//                 }} />
//         </Tab.Navigator>
//     );
// }
// export default TopTab;