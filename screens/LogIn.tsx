import { Alert } from "react-native";

import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { colors } from "../constants/styles";
import useAuth from "../hooks/useAuth";

function LogInScreen() {
  const { loading, error, signInHandler } = useAuth();

  if (loading) {
    return (
      <LoadingOverlay
        loadingConfig={{ size: "large", color: colors.primary800 }}
        message="Loggin You In..."
      />
    );
  }

  return (
    <>
      <AuthContent isLogin onAuthenticate={signInHandler} />
      {error && Alert.alert("Authentication Failed!", error)}
    </>
  );
}

export default LogInScreen;
