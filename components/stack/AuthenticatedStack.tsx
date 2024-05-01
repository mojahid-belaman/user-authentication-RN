import { useContext } from "react";

import { Stack } from "../../App";
import { stackOptionsHeader } from "../../constants/styles";
import WelcomeScreen from "../../screens/Welcome";
import IconBtn from "../ui/IconBtn";
import { AuthContext } from "../../store/auth-context";

function AuthenticatedStack() {
  const { logOut } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        ...stackOptionsHeader,
        headerRight: ({ tintColor }) => (
          <IconBtn
            icon={{ name: "log-out", size: 24, color: tintColor }}
            onPress={logOut}
          />
        ),
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

export default AuthenticatedStack;
