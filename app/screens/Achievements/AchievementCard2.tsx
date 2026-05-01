import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ActivityProps = {
  title: string;
  description: string;
  date: string;
  // onPress: ()=>void
};

export default function AchievementCard2({
  title,
  description,
  date,
  // onPress
}: ActivityProps) {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>{title}</Text>

<Text style={styles.description} numberOfLines={2} >
          {description}
        </Text>

      <Text style={styles.date}>
        {new Date(date).toLocaleString()}
      </Text>
      </View>
   
 <MaterialCommunityIcons  name="dots-vertical" size={30}  />
    
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