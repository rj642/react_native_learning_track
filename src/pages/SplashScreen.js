import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet, Text, View, useColorScheme } from "react-native";


const AppLogo = () => {
    return(
        <View>
            <Text style={styles.logoStyle}>ONGO</Text>
        </View>
    )
}

const SplashScreen = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return(
        <View style={styles.viewStyle}>
            <AppLogo />
        </View>
    )

}

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FE0000"
    },
    logoStyle: {
        width: '100%',
        padding: 24,
        fontWeight: "500",
        fontSize: 38,
        color: "#FFFFFF",
        letterSpacing: 3,
    }
});

export default SplashScreen;