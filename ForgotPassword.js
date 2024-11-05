import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Avatar, TextInput, Button, Switch } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [faceIDEnabled, setFaceIDEnabled] = useState(false);

    // Function to handle the toggle for Face ID
    const toggleFaceID = () => setFaceIDEnabled(!faceIDEnabled);

    return (
        <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar.Image size={200} source={require('./assets/avatar.jpg')} style={styles.avatarStyle} />
            </View>

            <View style={styles.content}>
                <Text style={styles.headerText}>Choose a Password</Text>
                <Text style={styles.instructionText}>Input your password for access your account</Text>
                
                <TextInput
                    label="Enter your password"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    secureTextEntry
                    underlineColor="transparent"
                    mode="outlined"
                    activeOutlineColor="palevioletred"  // Active color for TextInput
                    outlineColor="white"
                    theme={{ colors: { text: "#333", placeholder: "#999" } }}
                />

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Enable Face ID</Text>
                    <Switch
                        value={faceIDEnabled}
                        onValueChange={toggleFaceID}
                        color="purple"
                    />
                </View>

                <Button
                    mode="contained"
                    style={styles.submitButton}
                    labelStyle={{ color: 'white' }}
                >
                    Submit
                </Button>

                <Text style={styles.laterText} onPress={() => navigation.navigate('Login')}>I’ll do this later</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 50,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
        color: 'palevioletred',  // Updated header text color
    },
    instructionText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    switchLabel: {
        fontSize: 16,
        color: 'black',
    },
    submitButton: {
        width: '100%',
        borderRadius: 25,
        backgroundColor: 'palevioletred',  // Updated button color
        paddingVertical: 10,
    },
    laterText: {
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
        textDecorationLine: 'underline',
    },
});

export default ForgotPassword;
