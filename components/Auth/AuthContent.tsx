import { Alert, StyleSheet, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import AuthForm, { cridentialType } from "./AuthForm";
import Button from "../UI/Button";
import { colors } from "../../constants/styles";
import { RootStackParamList } from "../../App";
import { useState } from "react";
import {
  emailIsValid,
  isEqual,
  passwordIsValid,
} from "../../utils/helper/validation";

interface IAuthContentProps {
  isLogin?: boolean;
}

export type errorType = {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
};

function AuthContent(props: IAuthContentProps) {
  const { isLogin } = props;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [credentialsInvalid, setCredentailsInvalid] = useState<errorType>({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAthModeHandler() {
    isLogin ? navigation.navigate("signUp") : navigation.navigate("logIn");
  }

  function submitHandler(credentials: cridentialType) {
    let { email, password, confirmEmail, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailValid = emailIsValid(email);
    const passwordValid = passwordIsValid(password);
    const emailAreEqual = isEqual(email, confirmEmail);
    const passwordAreEqual = isEqual(password, confirmPassword);

    if (
      !emailValid ||
      !passwordValid ||
      (!isLogin && (emailAreEqual || passwordAreEqual))
    ) {
      Alert.alert("Invalid Input", "Please check your entered credentials.");
      setCredentailsInvalid({
        email: !emailValid,
        password: !passwordValid,
        confirmEmail: !emailValid || !emailAreEqual,
        confirmPassword: !passwordValid || !passwordAreEqual,
      });
      return;
    }
    setCredentailsInvalid({
      email: !emailValid,
      password: !passwordValid,
      confirmEmail: !emailValid || !emailAreEqual,
      confirmPassword: !passwordValid || !passwordAreEqual,
    });
  }

  console.log(credentialsInvalid);

  return (
    <View style={styles.container}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <Button fit onPress={switchAthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </Button>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary800,
    marginTop: 80,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 8,
    elevation: 4,
  },
});
