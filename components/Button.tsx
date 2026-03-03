import { createTasksStyles } from "@/assets/styles/tasks.styles";
import React from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle: TextStyle
};
const tasksStyles = createTasksStyles();

export default function CustomButton({ 
  title,
  onPress,
  style,
  textStyle,}: ButtonProps) {
  return <Pressable  >
   <Text>{title}</Text> 
    </Pressable>;
}