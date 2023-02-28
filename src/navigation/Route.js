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






            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;