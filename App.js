import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword'; 

const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Register" component={Register} />
                            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
