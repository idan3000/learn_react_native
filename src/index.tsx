import { Button, View } from "react-native";
import { useState } from "react";
import FlexBox from "./practice/flexBox";
import styles from "./styles/index_styles";
import Goal from "./goal_type";
import InputContainer from "./components/inputContainer";
import GoalsContainer from "./components/goalsContainer";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [allGoals, setAllGoals] = useState<Goal[]>([]);
  const [inputGoalText, setInputGoalText] = useState(``);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModal = () => {
    setModalIsVisible(true);
  };
  const closedModal = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = () => {
    if (!inputGoalText) return;
    setAllGoals((oldGoals) => [
      { text: inputGoalText, key: oldGoals.length },
      ...oldGoals,
    ]);
    setInputGoalText(``);
    setModalIsVisible(false);
  };

  return (
    // <FlexBox />
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="add new goal" color="#5e0acc" onPress={openModal} />
        <InputContainer
          inputGoalText={inputGoalText}
          addGoalHandler={addGoalHandler}
          goalInputHandler={setInputGoalText}
          isVisible={modalIsVisible}
          closedModal={closedModal}
        />
        <GoalsContainer allGoals={allGoals} setAllGoals={setAllGoals} />
      </View>
    </>
  );
}
