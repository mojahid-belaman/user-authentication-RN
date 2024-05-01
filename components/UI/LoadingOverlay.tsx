import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

type LoadingOverlayProps = {
  message?: string;
  loadingConfig?: ActivityIndicatorProps;
};

function LoadingOverlay(props: LoadingOverlayProps) {
  const { message, loadingConfig } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator {...loadingConfig} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});
