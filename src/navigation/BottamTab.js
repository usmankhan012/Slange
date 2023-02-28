import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';
import HomeScreen from '../screen/HomeScreen';
import Map from '../screen/Map';
import Search from '../screen/Search';
import UserProfileData from '../screen/UserProfileData';


const RenderTabIcon = (props) => {
    const { active, inactive, isfocus, activecolor, inactivecolor } = props
    return (
        <View style={{ alignItems: 'center', }}>
            <Image style={{ marginTop:heightPercentageToDP(1), height: scale(25), width: scale(30), resizeMode: 'contain', tintColor: isfocus ? 'rgba(129, 18, 8, 0.8)' : '#555' }} source={isfocus ? active : inactive} />
        </View>
    )
}

const Tab = createBottomTabNavigator();

function BottamTabbb() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                active={Imagepath.Imagepath.homeicon}
                                inactive={Imagepath.Imagepath.homeicon}
                                //   title='Check'
                                isfocus={focused}
                            // activecolor='rgba(129, 18, 8, 0.8)'
                            // inactivecolor='gray'
                            />
                        )

                    }
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                active={Imagepath.Imagepath.search}
                                inactive={Imagepath.Imagepath.search}
                                //   title='Check'
                                isfocus={focused}
                            // activecolor='rgba(129, 18, 8, 0.8)'
                            // inactivecolor='gray'
                            />

                        )

                    }
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                active={Imagepath.Imagepath.mapmarker}
                                inactive={Imagepath.Imagepath.mapmarker}
                                //   title='Check'
                                isfocus={focused}
                            // activecolor='rgba(129, 18, 8, 0.8)'
                            // inactivecolor='gray'
                            />

                        )

                    }
                }}
            />
            <Tab.Screen
                name="UserProfileData"
                component={UserProfileData}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                active={Imagepath.Imagepath.user}
                                inactive={Imagepath.Imagepath.user}
                                //   title='Check'
                                isfocus={focused}
                            // activecolor='rgba(129, 18, 8, 0.8)'
                            // inactivecolor='gray'
                            />

                        )

                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default BottamTabbb;
