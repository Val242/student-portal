import { createTasksStyles } from '@/assets/styles/tasks.styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function TasksTop() {
    const tasksStyles = createTasksStyles();
  return (
          <View style = {tasksStyles.topNav}>
          <Text style = {tasksStyles.title}>My tasks</Text>
              <View style = {tasksStyles.InnerTopNav}>
                <Ionicons name='search' size={25} style={{backgroundColor:"white", borderRadius: 20, padding:8}}/>
                <Ionicons name='notifications-outline' size={25} style={{backgroundColor:"white", borderRadius: 20, padding:8}}/>
              </View>
          </View>
  )
}