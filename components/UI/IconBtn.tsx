import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IIconBtnProps {
  icon: {
    name: keyof typeof Ionicons.glyphMap;
    color: string | undefined;
    size: number;
  };
  onPress?: () => void;
}

function IconBtn(props: IIconBtnProps) {
  const { onPress, icon } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons {...icon} />
    </Pressable>
  );
}

export default IconBtn;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
