import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type DateProps = {
  day: string;
  date: number;
   isActive: boolean;
  onPress: () => void;
};

export default function DateComponent({ date, day , isActive,onPress}: DateProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        isActive && { backgroundColor: "#a28ef9" }
      ]}
    >
      <Text style={styles.dayText}>{day}</Text>
      <Text style={styles.dateText}>{date}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minWidth: 90,
  },

  dayText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },

  dateText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
});