import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [data, setData] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      "https://expense-tracker-8e4e8-default-rtdb.firebaseio.com/message.json?auth=" +
        token
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text>You Authenticated Successfully! </Text>
      <Text>{data}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
