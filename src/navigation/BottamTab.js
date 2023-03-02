import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';
import HomeScreen from '../screen/HomeScreen';
import Map from '../screen/Map';
import Search from '../screen/Search';
import UserProfileData from '../screen/UserProfileData';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screen/About';
import UserProfile from '../screen/UserProfile';
import Preferences from '../screen/Preferences';
import Edit_profile from '../screen/Edit_profile';
import TopTab from './TopTab';
import TopTab2 from './TopTab2';



const RenderTabIcon = (props) => {
    const { active, inactive, isfocus, activecolor, inactivecolor } = props
    return (
        <View style={{ alignItems: 'center', }}>
            <Image style={{ marginTop: heightPercentageToDP(1), height: scale(25), width: scale(30), resizeMode: 'contain', tintColor: isfocus ? 'rgba(129, 18, 8, 0.8)' : '#555' }} source={isfocus ? active : inactive} />
        </View>
    )
};

const Tab = createBottomTabNavigator();

const Profile = createNativeStackNavigator();
const HomeScren = createNativeStackNavigator();

const Peofiletabscree = () => {

    return (
        <Profile.Navigator>

            <Profile.Screen
                options={{ headerShown: false }}
                name='UserProfileData'
                component={UserProfileData}
            />

            <Profile.Screen
                options={{ headerShown: false }}
                name='About'
                component={About}
            />


            <Profile.Screen
                options={{ headerShown: false }}
                name='UserProfile'
                component={UserProfile}
            />

            {/* <Profile.Screen
                options={{ headerShown: false }}
                name='TopTab2'
                component={TopTab2}
            /> */}


            <Profile.Screen
                options={{ headerShown: false }}
                name='Preferences'
                component={Preferences}
            />

            <Profile.Screen
                options={{ headerShown: false }}
                name='Edit_profile'
                component={Edit_profile}
            />


        </Profile.Navigator>
    )

}

const Homescreentab = () => {
    return (
        <HomeScren.Navigator>
            <HomeScren.Screen
                options={{ headerShown: false }}
                name='HomeScreen'
                component={HomeScreen}
            />
            <HomeScren.Screen
                options={{ headerShown: false }}
                name='UserProfile'
                component={UserProfile}
            />

            <HomeScren.Screen
                options={{ headerShown: false }}
                name='TopTab2'
                component={TopTab2}
            />


        </HomeScren.Navigator>
    )
}

function BottamTabbb() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Homescreentab}
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
                component={Peofiletabscree}
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
