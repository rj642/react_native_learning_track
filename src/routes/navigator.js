import React, { useRef } from 'react'
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../pages/Auth/SignIn'
import SignUpScreen from '../pages/Auth/SignUp'
import { ToastAndroid } from 'react-native';

const navigationRef = createNavigationContainerRef();

const AppStack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="SignIn" component={SignInScreen} />
                <AppStack.Screen name="SignUp" component={SignUpScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export const navigate = (name, path) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, path)
    } else {
        ToastAndroid.show(`Ref is not yet ready`, ToastAndroid.LONG)
    }
}

export default Navigator