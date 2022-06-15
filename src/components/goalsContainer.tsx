import { FlatList, ListRenderItem, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "../styles/goales_styles";
import { FC } from "react";
import Goal from "../goal_type";

type Props = {
  allGoals: Goal[];
  setAllGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
};

const GoalsContainer: FC<Props> = ({ allGoals, setAllGoals }) => {
  const removeGoal = (key: number) =>
    setAllGoals((oldGoals) => oldGoals.filter((goal) => goal.key !== key));

  const renderGoal: ListRenderItem<Goal> = ({ item }) => (
    <View style={styles.singleGoalContainer}>
      <Pressable
        onPress={removeGoal.bind(this, item.key)}
        android_ripple={styles.Press}
      >
        <Text style={styles.singleGoalText}>{item.text}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        style={styles.goalsScrollView}
        data={allGoals}
        renderItem={renderGoal}
      />
    </View>
  );
};
export default GoalsContainer;
