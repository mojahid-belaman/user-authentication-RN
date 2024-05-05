import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../../store/auth-context";
import IconBtn from "../ui/IconBtn";
import { stackOptionsHeader } from "../../constants/styles";
import WelcomeScreen from "../../screens/Welcome";
import LogInScreen from "../../screens/LogIn";
import SignUpScreen from "../../screens/SignUp";
import { RootStackParamList } from "../../App";

const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthenticatedStack() {
  const { logOut } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        ...stackOptionsHeader,
        headerRight: ({ tintColor }) => (
          <IconBtn
            icon={{ name: "log-out", size: 24, color: tintColor }}
            onPress={logOut}
          />
        ),
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

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

function Navigation() {
  const { isAuthenticate } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticate ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Navigation;
