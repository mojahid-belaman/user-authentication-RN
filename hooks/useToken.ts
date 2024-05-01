import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../store/auth-context";

function useToken() {
  const { authenticate } = useContext(AuthContext);

  const [loadingToken, setLoadingToken] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authenticate(storedToken);
      }
      setLoadingToken(false);
    }
    fetchToken();
  }, []);

  return { loadingToken };
}

export default useToken;
