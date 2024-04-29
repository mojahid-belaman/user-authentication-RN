import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/styles";

interface IButtonProps {
  children: React.ReactNode;
  fit?: boolean;
  onPress: () => void;
}

function Button(props: IButtonProps) {
  const { children, onPress, fit } = props;

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={[styles.button, fit && styles.fitBtn]}>
        <Text style={[styles.text, fit && styles.fitText]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary500,
    paddingVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  fitBtn: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  fitText: {
    fontWeight: "normal",
    fontSize: 16,
    opacity: 0.8,
  },
  pressed: {
    opacity: 0.75,
  },
});
