import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ActivityProps = {
  title: string;
  description: string;
  date: string;
};

export default function achievementCard({
  title,
  description,
  date,
}: ActivityProps) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.date}>
        {new Date(date).toLocaleString()}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },

  date: {
    fontSize: 12,
    color: "#999",
  },
});