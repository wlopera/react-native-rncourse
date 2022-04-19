import { View, Text, StyleSheet, Pressable } from "react-native";

const GoatItem = (props) => {
  return (
    // <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={() => props.onDeleteItem(props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoatItem;
