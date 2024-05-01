import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

interface IAuthState {
  token: string;
  isAuthenticate: boolean;
  authenticate: (token: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext({
  token: "",
  isAuthenticate: false,
  authenticate(token: string) {},
  logOut() {},
} as IAuthState);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string>("");

  function authenticate(token: string) {
    setToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logOut() {
    setToken("");
    AsyncStorage.removeItem("token");
  }

  const value = {
    token,
    isAuthenticate: !!token,
    authenticate,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
