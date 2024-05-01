import React from "react";

import { Stack } from "../../App";
import { stackOptionsHeader } from "../../constants/styles";
import LogInScreen from "../../screens/LogIn";
import SignUpScreen from "../../screens/SignUp";

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

export default AuthStack;
