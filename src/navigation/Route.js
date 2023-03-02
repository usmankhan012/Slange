// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splace from '../screen/Splace';
import SlanseSwiper from '../screen/SlanseSwiper';
import Login from '../screen/Login';
import { Registration } from '../screen/Registration';
import HomeScreen from '../screen/HomeScreen';
import Map from '../screen/Map';
import BottamTab from './BottamTab';
import BrandDetail from '../screen/BrandDetail';
import Search from '../screen/Search';
import UserProfile from '../screen/UserProfile';
import UserProfileData from '../screen/UserProfileData';
import ForgetPassword from '../screen/ForgetPassword';
import Otp from '../screen/Otp';
import NewPassword from '../screen/NewPassword';
import About from '../screen/About';
import Privacy_police from '../screen/Privacy_police';
import Terms_use from '../screen/Terms_use';
import Open_source from '../screen/Open_source';
import App_update from '../screen/App_update';
import Edit_profile from '../screen/Edit_profile';
import Preferences from '../screen/Preferences';
// import Timep from '../screen/Timep';


const Stack = createNativeStackNavigator();

function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splace' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splace" component={Splace} />
                <Stack.Screen name="SlanseSwiper" component={SlanseSwiper} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="BottamTab" component={BottamTab} />
                <Stack.Screen name="BrandDetail" component={BrandDetail} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="UserProfileData" component={UserProfileData} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Privacy_police" component={Privacy_police} />
                <Stack.Screen name="Terms_use" component={Terms_use} />
                <Stack.Screen name="Open_source" component={Open_source} />
                <Stack.Screen name="App_update" component={App_update} />
                <Stack.Screen name="Edit_profile" component={Edit_profile} />
                <Stack.Screen name="Preferences" component={Preferences} />
                {/* <Stack.Screen name="Timep" component={Timep} /> */}






            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;