import { useState } from "react";
import { ScrollView, StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoatInput from "./components/GoatInput";
import GoalItem from "./components/GoatItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    if (!enteredGoalText || enteredGoalText.trim() === "") {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    console.log(id);
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Nueva Meta"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoatInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
