import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogInScreen from "./screens/LogIn";
import SignUpScreen from "./screens/SignUp";
import { stackOptionsHeader } from "./constants/styles";
import WelcomeScreen from "./screens/Welcome";
import { StatusBar } from "expo-status-bar";

export type RootStackParamList = {
  logIn: undefined;
  signUp: undefined;
  welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ ...stackOptionsHeader }}>
      <Stack.Screen
        name="logIn"
        component={LogInScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUpScreen}
        options={{ title: "Signup" }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator screenOptions={{ ...stackOptionsHeader }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </>
  );
}
