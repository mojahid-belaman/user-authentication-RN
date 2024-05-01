import { Alert, StyleSheet, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import Button from "../ui/Button";
import { colors } from "../../constants/styles";
import { RootStackParamList } from "../../App";
import { useState } from "react";
import {
  emailIsValid,
  isEqual,
  passwordIsValid,
} from "../../utils/helper/validation";
import AuthForm, { cridentialType } from "./AuthForm";

interface IAuthContentProps {
  isLogin?: boolean;
  onAuthenticate?: (email: string, password: string) => Promise<void>;
}

export type errorType = {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
};

function AuthContent(props: IAuthContentProps) {
  const { isLogin, onAuthenticate } = props;
  const navigation = useNavigation<
    NavigationProp<RootStackParamList> & {
      replace<RouteName extends keyof RootStackParamList>(
        screen: RouteName
      ): unknown;
    }
  >();

  const [credentialsInvalid, setCredentailsInvalid] = useState<errorType>({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAthModeHandler() {
    isLogin ? navigation.replace("signUp") : navigation.replace("logIn");
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
      (!isLogin && (!emailAreEqual || !passwordAreEqual))
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
    onAuthenticate!(email, password);
  }

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
