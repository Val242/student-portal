import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ScheduleProps={
    startTime: string;
    endTime: string;
    title: string;
    location: string;
    lecturer: string;
    isActive: boolean;
    onPress: () => void;
}

export default function ScheduleComponent(
    {
        startTime, 
        endTime,
        title,
        location,
        lecturer,
        isActive,
        onPress
    }: ScheduleProps) {
  return (
    <Pressable style={[
        styles.container,
        isActive && { backgroundColor: "#a4f5a6" }
      ]} onPress={onPress}>
      <View style={{ flex: 1 }}>
            <Ionicons name = 'time-outline' size={30} style={{marginBottom: 10}}/>
            <Text style={{marginBottom: 10}}>{startTime}</Text>
            <Text>{endTime}</Text>
      </View>
      <View style={{ flex: 2 }}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.location}>{location}</Text>
            <Text>{lecturer}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        // gap: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingTop: 25,
        paddingBottom: 25
    },
    title:{
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10
    },
     location:{
        // color: '#9aa6b2',
        marginBottom: 10
    },
})