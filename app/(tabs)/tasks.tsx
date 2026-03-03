import { createTasksStyles } from '@/assets/styles/tasks.styles';
import Button from '@/components/Button';
import Todos from '@/components/Todos';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const tasksStyles = createTasksStyles();

const tasks = () => {
      const todos = [
          {
              status: 'in progress',
              title: 'Read poem & answer questions',
              course: 'English Literature',
              date: 'May 12, 2025',
              comments: 12
          },
              {
              status: 'To do',
              title: 'Create a comic strip with a story',
              course: 'Social studies',
              date: 'May 12, 2025',
              comments: 2
          }
      ]
  return (
    <SafeAreaView style ={tasksStyles.page} >
      <View style ={tasksStyles.page}>
          <View style = {tasksStyles.topNav}>
          <Text style = {tasksStyles.title}>My tasks</Text>
              <View style = {tasksStyles.InnerTopNav}>
                <Ionicons name='search' size={30}/>
                <Ionicons name='notifications' size={30}/>
              </View>
          </View>
           
      
        <View style = {tasksStyles.buttonRow}>
                  <Button title={'All Task'} textStyle={tasksStyles.individualButton} />
                  <Button title='To do' textStyle={tasksStyles.individualButton}/>
                  <Button title='In Progress'  textStyle={tasksStyles.individualButton}/>
                  <Button title='Done'  textStyle={tasksStyles.individualButton}/>
          </View>

          <View style = {tasksStyles.filters}>
              <View style = {tasksStyles.filter}>
                <Ionicons name='funnel' size={20}/>
                <Text>Filters</Text>
              </View>
              <View style = {tasksStyles.filter}>
                <Ionicons name='filter' size={20}/>
                <Text>Sort by</Text>
              </View>
          </View>


          {
            todos.map((todo, index)=>(
              
                <Todos 
                  status={todo.status}
                  title={todo.title}
                  course={todo.course}
                  date={todo.date}
                  comments={todo.comments}
                  key={index}
                />
             
            ))}

      </View>
    </SafeAreaView>
  )
}

export default tasks