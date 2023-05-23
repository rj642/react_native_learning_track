import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SignInScreen from "../pages/Auth/SignIn";
import SignUpScreen from "../pages/Auth/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="SignIn"
                screenOptions={{ tabBarLabel: false }}
                barStyle={{ backgroundColor: '#F7F7F7', height: 56 }}
            >
                <Tab.Screen name="SignIn" component={SignInScreen} options={{
                    tabBarIcon: ({ color }) => {
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    }
                }} />
                <Tab.Screen name="SignUp" component={SignUpScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator;