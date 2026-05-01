import React from "react";
import { StyleSheet, Text, View } from "react-native";

type NotesProps = {
  title: string;
  content: string;
  date: string;
  // onPress: ()=>void
};

export default function NotesCard({
  title,
  content,
  date,
  // onPress
}: NotesProps) {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>{title}</Text>

    <Text style={styles.content} >
          {content}
        </Text>

      <Text style={styles.date}>
        {new Date(date).toLocaleString()}
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
   justifyContent: "space-between",
    borderRadius: 10,
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "#a29797",
    zIndex: 1,
    elevation: 2, 
    shadowColor: "white"
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  content: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },

  date: {
    fontSize: 12,
    color: "#999",
  },
});