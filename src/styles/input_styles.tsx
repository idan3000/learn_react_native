import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: `center`,
    alignItems: "center",
    borderColor: `#cccccc`,
    backgroundColor: `#311b6b`,
  },
  inputText: {
    borderWidth: 1,
    borderColor: `#e4f0ff`,
    backgroundColor: `#e4f0ff`,
    color: `#120438`,
    borderRadius: 6,
    width: `90%`,
    padding: 16,
  },
  btnContainer: {
    flexDirection: `row`,
    justifyContent: "center",
  },
  btn: {
    width: `30%`,
    margin: `2%`,
  },
  image: {
    width: 100,
    height: 100,

    margin: 10,
  },
});
export default inputStyles;
