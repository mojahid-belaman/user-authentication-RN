import { Alert } from "react-native";

import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { colors } from "../constants/styles";
import useAuth from "../hooks/useAuth";

function SignUpScreen() {
  const { loading, error, signUpHandler } = useAuth();

  if (loading) {
    return (
      <LoadingOverlay
        loadingConfig={{ size: "large", color: colors.primary800 }}
        message="Create User..."
      />
    );
  }

  return (
    <>
      <AuthContent onAuthenticate={signUpHandler} />
      {error && Alert.alert("Authentication Failed!", error)}
    </>
  );
}

export default SignUpScreen;
