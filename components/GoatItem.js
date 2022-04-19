import { View, Text, StyleSheet, Pressable } from "react-native";

const GoatItem = (props) => {
  return (
    // <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
    <Pressable onPress={() => props.onDeleteItem(props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
  },
});

export default GoatItem;
