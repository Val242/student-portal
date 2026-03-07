import { createTasksStyles } from "@/assets/styles/tasks.styles";
import React from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

export type Variant =  "allTask" | "toDO" | "inProgress" | "done";
type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle: TextStyle;
  status: Variant;
//   isActive: boolean;
};

type ProfileButton = {
    section: string;
}

const tasksStyles = createTasksStyles();

export default function CustomButton({ 
  title,
  onPress,
  style,
  textStyle,
  status,
}: ButtonProps) {

    const variantStyles: Record<Variant, ViewStyle>={
        allTask: {
            backgroundColor: 'white' ,
            borderRadius: 25,
            paddingHorizontal: 10,
            paddingVertical: 10,
           
        },
        toDO: {
            backgroundColor: 'white' ,
            borderRadius: 25,
            paddingHorizontal: 10,
            paddingVertical: 10,
           
        },
        inProgress: {
            backgroundColor: 'white' ,
            borderRadius: 25,
            paddingHorizontal: 10,
            paddingVertical: 10,
           
        },
        done: {
            backgroundColor: 'white' ,
            borderRadius: 25,
            paddingHorizontal: 10,
            paddingVertical: 10,
           
        }
    }

   

  return <Pressable style = {variantStyles[status]} onPress={onPress}  >
   <Text>{title}</Text> 
    </Pressable>;
}

export function ProfileButton({section}:ProfileButton){
    return <Pressable style={{ width: '50%' }}  >
        <Text style={
            {
                textAlign: 'center',
                backgroundColor: '#eceef0',
                padding: 10,
                borderRadius: 30,
                fontSize: 20,
                fontWeight: "500",     
                }
                }> {section}</Text>
    </Pressable>
}

