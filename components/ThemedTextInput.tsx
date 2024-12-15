import {
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";


export type ThemedTextProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedTextProps) {

  return <TextInput keyboardType="default" style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ffff",
    height: 56,
    width: "100%",
    paddingHorizontal: 16,
    color: "#111",
    borderWidth: 1,
    borderColor: "#c084fc",
    borderRadius: 8,
  },
});
