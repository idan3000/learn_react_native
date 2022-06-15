import {
  Button,
  TextInput,
  View,
  GestureResponderEvent,
  Modal,
  Image,
} from "react-native";
import styles from "../styles/input_styles";
import { FC } from "react";

type Props = {
  inputGoalText: string;
  goalInputHandler: (text: string) => void;
  addGoalHandler: (event: GestureResponderEvent) => void;
  isVisible: boolean;
  closedModal: () => void;
};

const InputContainer: FC<Props> = ({
  inputGoalText,
  goalInputHandler,
  addGoalHandler,
  isVisible,
  closedModal,
}) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder={`course goals!`}
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={inputGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title={`add goal`}
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
          <View style={styles.btn}>
            <Button title="cancel" onPress={closedModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default InputContainer;
