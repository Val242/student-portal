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
    return <Pressable style={{ width: '50%' }}  >
        <Text style={
            {
                textAlign: 'center',
                backgroundColor: '#eaedf0',
                padding: 10,
                borderRadius:20,
                fontSize: 20,
                fontWeight: "bold",
                
                }
                }> {section}</Text>
    </Pressable>
}