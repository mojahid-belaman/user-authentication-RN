import { useContext, useState } from "react";

import { createUser, logIn } from "../utils/api/auth";
import { AuthContext } from "../store/auth-context";

function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { authenticate } = useContext(AuthContext);

  async function signUpHandler(email: string, password: string) {
    try {
      setLoading(true);
      const token = await createUser(email, password);
      authenticate(token);
    } catch (error: any) {
      setError(error?.errors.message);
      setLoading(false);
    }
  }

  async function signInHandler(email: string, password: string) {
    try {
      setLoading(true);
      const token = await logIn(email, password);
      authenticate(token);
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
    }
  }

  return { loading, error, signInHandler, signUpHandler };
}

export default useAuth;
