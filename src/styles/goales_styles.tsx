import { StyleSheet } from "react-native";

const goalsStyles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
    alignItems: `center`,
  },
  goalsScrollView: {
    width: `100%`,
  },
  singleGoalContainer: {
    margin: 8,
    backgroundColor: `#5e0acc`,
    borderRadius: 6,
  },
  singleGoalText: {
    textAlign: `center`,
    color: `#ffffff`,
    padding: 8,
  },
  Press: {
    color: `#dddddd`,
  },
});
export default goalsStyles;
