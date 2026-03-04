import { createTasksStyles } from "@/assets/styles/tasks.styles";
import React from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle: TextStyle
};

type ProfileButton = {
    section: string;
}

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

export function ProfileButton({section}:ProfileButton){
    return <Pressable style={{}} >
        <Text style={
            {
                textAlign: 'center',
                backgroundColor: '#eceef08d',
                marginBottom: 5,
                borderRadius:20,
                boxSizing: '15'
                }
                }> {section}</Text>
    </Pressable>
}