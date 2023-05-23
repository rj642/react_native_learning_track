import React, { useState } from "react";
import { Image, StyleSheet, Switch, Text, TextInput, View, Dimensions, ScrollView } from "react-native";
import { MailIcon } from "../../assets/assests";
import { CustomButton } from "../../../App";
import { CustomInput, AdditionalLoginButton } from "./SignIn";

const SignUpScreen = ({navigation}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [isEnabled, setIsEnabled] = useState(false)

    const toggleSwitch = () => setIsEnabled(prevState => !prevState);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.viewStyle}>
                <Image style={{ margin: 10, display: 'flex', resizeMode: 'contain' }} source={require('../../assets/event_hub_logo.png')} />
                <Text style={styles.textStyle}>Sign Up</Text>
                <CustomInput value={fullName} placeholder="Full Name" />
                <CustomInput value={username} placeholder="abc@email.com" />
                <CustomInput value={password} placeholder="Password" />
                <CustomInput value={password} placeholder="Confirm Password" />
                <View style={styles.wrapMaxWidth}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#5669FF' }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#000000'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Text style={styles.standardTextStyle}>Remember Me</Text>
                    </View>

                    <Text style={styles.standardTextStyle}>Forgot Password?</Text>
                </View>
                <CustomButton buttonContent="SIGN UP" styles={styles.customButtonStyle} textStyles={styles.buttonTextStyle} />
                <Text>OR</Text>
                <AdditionalLoginButton />
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '400', }}>Already have an account? </Text>
                    <Text style={styles.buttonTextBlackStyle}>Sign In</Text>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        height: '100%',
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    editTextStyle: {
        width: '100%',
        paddingHorizontal: 16,
        borderRadius: 16,
        borderColor: "#E0E0E0",
        marginTop: 16,
        borderWidth: 1
    },
    textInputStyle: {
        width: '100%',
        color: "#000000"
    },
    textStyle: {
        fontSize: 24,
        color: "#120D26",
        width: '100%',
        textAlign: "left",
        fontWeight: "500",
    },
    wrapMaxWidth: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapMaxSize: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    standardTextStyle: {
        color: '#120D26',
        fontWeight: "400",
        fontSize: 14
    },
    customButtonStyle: {
        width: '80%',
        paddingVertical: 15,
        marginVertical: 20,
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: '#5669FF'
    },
    additionalLoginStyle: {
        width: '80%',
        paddingVertical: 15,
        marginVertical: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#EDE5E5',
        backgroundColor: '#FFFFFF',
        textAlign: 'center'
    },
    buttonTextStyle: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
    },
    buttonTextBlackStyle: {
        textAlign: 'center',
        color: '#120D26',
        fontWeight: '400',
        fontSize: 14,
    }
})

export default SignUpScreen;