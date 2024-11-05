import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput, Button, Checkbox, Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.container}>
            <View style={styles.header}>
                <Avatar.Image size={100} source={require('./assets/avatar.jpg')} style={styles.avatar} />
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to your account</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    label="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                    left={<TextInput.Icon icon="account" />}
                    mode="outlined"
                    activeOutlineColor="palevioletred"
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                    left={<TextInput.Icon icon="lock" />}
                    mode="outlined"
                    activeOutlineColor="palevioletred"
                />
                <View style={styles.optionsContainer}>
                    <View style={styles.rememberMeContainer}>
                        <Checkbox
                            status={rememberMe ? 'checked' : 'unchecked'}
                            onPress={() => setRememberMe(!rememberMe)}
                            color="palevioletred" // Set the checkbox color here
                        />
                        <Text style={styles.optionText}>Remember me</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={styles.optionText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <Button mode="contained" style={styles.loginButton} onPress={() => console.log("Login")}>
                    LOGIN
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.footerText}>
                        Don't have an account? <Text style={styles.linkText}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    header: {
        alignItems: "center",
        marginBottom: 40,
    },
    avatar: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "palevioletred",
    },
    subtitle: {
        fontSize: 16,
        color: "black",
        opacity: 0.8,
    },
    inputContainer: {
        width: "100%",
    },
    input: {
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 15,
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    rememberMeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    optionText: {
        color: "black",
    },
    loginButton: {
        borderRadius: 10,
        backgroundColor: "palevioletred",
        paddingVertical: 10,
    },
    footerText: {
        textAlign: "center",
        marginTop: 20,
        color: "black",
    },
    linkText: {
        fontWeight: "bold",
        color: "#FFD700",
    },
});

export default Login;
