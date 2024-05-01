import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../ui/Button";
import { errorType } from "./AuthContent";
import Input from "./Input";

interface IAuthFormProps {
  isLogin?: boolean;
  credentialsInvalid: errorType;
  onSubmit: (credentials: cridentialType) => void;
}

enum authActionKind {
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_EMAIL = "confirmEmail",
  CONFIRM_PASSWORD = "confirmPassword",
}

export type cridentialType = {
  email: string;
  password: string;
  confirmEmail: string;
  confirmPassword: string;
};

function AuthForm(props: IAuthFormProps) {
  const { isLogin, onSubmit, credentialsInvalid } = props;
  const [cridentails, setCridentials] = useState<cridentialType>({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const {
    email: emailInvalid,
    password: passwordInvalid,
    confirmEmail: confirmEmailInvalid,
    confirmPassword: confirmPasswordInvalid,
  } = credentialsInvalid;

  function inputChangeValueHandler(kind: authActionKind, value: string) {
    setCridentials((prev) => ({
      ...prev,
      [kind]: value,
    }));
  }

  function submitHandler() {
    onSubmit(cridentails);
  }

  return (
    <View>
      <Input
        label="Email Address"
        isInValid={emailInvalid}
        inputConfig={{
          keyboardType: "email-address",
          autoCapitalize: "none",
          value: cridentails.email,
          onChangeText: inputChangeValueHandler.bind(
            null,
            authActionKind.EMAIL
          ),
        }}
      />
      {!isLogin && (
        <Input
          label="Confirm Email Address"
          isInValid={confirmEmailInvalid}
          inputConfig={{
            keyboardType: "email-address",
            value: cridentails.confirmEmail,
            onChangeText: inputChangeValueHandler.bind(
              null,
              authActionKind.CONFIRM_EMAIL
            ),
          }}
        />
      )}
      <Input
        label="Password"
        isInValid={passwordInvalid}
        inputConfig={{
          secureTextEntry: true,
          value: cridentails.password,
          onChangeText: inputChangeValueHandler.bind(
            null,
            authActionKind.PASSWORD
          ),
        }}
      />
      {!isLogin && (
        <Input
          label="Confirm Password"
          isInValid={confirmPasswordInvalid}
          inputConfig={{
            secureTextEntry: true,
            value: cridentails.confirmPassword,
            onChangeText: inputChangeValueHandler.bind(
              null,
              authActionKind.CONFIRM_PASSWORD
            ),
          }}
        />
      )}
      <View style={styles.button}>
        <Button onPress={submitHandler}>Log In</Button>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});
