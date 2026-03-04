import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type DateProps={
    day: string;
    date: number;
}

export default function DateComponent({date, day}: DateProps) {
  return (
    <Pressable>
      <View  style = {styles.container}>
      <Text style = {styles.dayText}>{day}</Text>
      <Text style = {styles.dayText}>{date}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',          // center text inside card
    // justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 16,         // more generous padding
    paddingVertical: 12,
    minWidth: 90,
    
  },
  dayText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },

  dateText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
})