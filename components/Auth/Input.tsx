import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { colors } from "../../constants/styles";

interface IInputProps {
  label: string;
  isInValid?: boolean;
  inputConfig?: TextInputProps;
}

function Input(props: IInputProps) {
  const { label, inputConfig, isInValid } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.label, isInValid && styles.labelError]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInValid && styles.inputError]}
        {...inputConfig}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    color: "white",
    marginBottom: 6,
    opacity: 0.9,
  },
  labelError: {
    color: colors.error500,
  },
  input: {
    backgroundColor: colors.primary100,
    borderRadius: 2,
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 18,
  },
  inputError: {
    backgroundColor: colors.error100,
  },
});
