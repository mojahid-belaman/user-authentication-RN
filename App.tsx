import { StatusBar } from "expo-status-bar";

import AuthProvider from "./store/auth-context";
import Navigation from "./components/stack/Navigation";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import useToken from "./hooks/useToken";

export type RootStackParamList = {
  logIn: undefined;
  signUp: undefined;
  welcome: undefined;
};

function Root() {
  const { loadingToken } = useToken();

  if (loadingToken) {
    return <LoadingOverlay message="LOADING..." />;
  }

  return <Navigation />;
}

function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthProvider>
        <Root />
      </AuthProvider>
    </>
  );
}

export default App;
