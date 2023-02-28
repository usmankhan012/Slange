import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import Imagepath from '../assets/Imagepath';
import AllDetails from '../screen/AllDetails';
import SecSingaldata from '../screen/SecSingaldata';

const Tab = createMaterialTopTabNavigator();

const TopTab2 = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { height: 40 },
            tabBarActiveTintColor: '#e91e63',
            tabBarStyle: { backgroundColor: 'white' },

        }}>
            <Tab.Screen options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ height: scale(20), width: scale(20), resizeMode: 'contain', tintColor: '#898989' , marginTop:scale(8)}} source={Imagepath.Imagepath.Window} />
                ),
            }}
                name="SecSingaldata" component={SecSingaldata} />


            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: scale(24), width: scale(24), resizeMode: 'contain', marginTop:scale(8)}} source={Imagepath.Imagepath.days7} />
                    ),
                }} name="AllDetails" component={AllDetails} />
        </Tab.Navigator>
    );
}
export default TopTab2;