import { createTasksStyles } from '@/assets/styles/tasks.styles';
import Button from '@/components/Button';
import Todos from '@/components/Todos';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TextStyle, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Variant =  "allTask" | "toDO" | "inProgress" | "done";
interface ButtonState {
  status: Variant;
  title: string;
  textStyle: TextStyle;
}

const tasksStyles = createTasksStyles();

const tasks = () => {



      const initialTodo = [
          {
              status: 'In progress',
              title: 'Read poem & answer questions',
              course: 'English Literature',
              date: 'May 12, 2025',
              comments: 12
          },
            {
              status: 'In progress',
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
          },
          {
              status: 'To do',
              title: 'Prepare for the math test',
              course: 'Mathematics',
              date: 'May 12, 2025',
              comments: 10
          },
          {
              status: 'Done',
              title: 'Writing feedback systems exam',
              course: 'Feedback Systems',
              date: 'May 12, 2025',
              comments: 10
          },
          {
              status: 'To do',
              title: 'Writing feedback systems exam',
              course: 'Feedback Systems',
              date: 'May 12, 2025',
              comments: 10
          },
      ]
      const [tasks, setTasks] = useState(initialTodo)
      const [filterType, setFilterType] = useState("all");

      
        // const handlePress  = ()=>{
        //   setIsActiveTask(prev => !prev)
        //    }

        const stateButtons: ButtonState[] = [
          {
            title: "All Tasks",
            textStyle: tasksStyles['individualButton'],
            status: "allTask"
          },
           {
            title: "To do",
            textStyle: tasksStyles['individualButton'],
            status: "toDO"
          },
           {
            title: "In Progress",
            textStyle: tasksStyles['individualButton'],
            status: "inProgress"
          },
           {
            title: "Done",
            textStyle: tasksStyles['individualButton'],
            status: "done"
          }
        ]


       const fetchFilteredTodos = (todoType: Variant) => {

            if (todoType === "allTask") {
              setTasks(initialTodo)
              return
            }

            let status = ""

            if (todoType === "toDO") status = "To do"
            if (todoType === "inProgress") status = "In progress"
            if (todoType === "done") status = "Done"

            const filtered = initialTodo.filter(todo => todo.status === status)

            setTasks(filtered)
}
     

  
  return (
   
    <SafeAreaView style ={tasksStyles.page} >
       <ScrollView  showsVerticalScrollIndicator={false}>
      <View style ={tasksStyles.page}>
          <View style = {tasksStyles.topNav}>
          <Text style = {tasksStyles.title}>My tasks</Text>
              <View style = {tasksStyles.InnerTopNav}>
                <Ionicons name='search' size={30} style={{backgroundColor:"white", borderRadius: 20, padding:8}}/>
                <Ionicons name='notifications-outline' size={30} style={{backgroundColor:"white", borderRadius: 20, padding:8}}/>
              </View>
          </View>
           
      
        <View style = {tasksStyles.buttonRow}>
                  {
                    stateButtons.map((stateButton, index)=>(
                      <Button 
                        title={stateButton.title}
                        textStyle={stateButton.textStyle}
                        status={stateButton.status}
                        onPress={()=> stateButton.status && fetchFilteredTodos(stateButton.status)}
                        key={index}
                      
                      />
                    ))
                  }
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
            tasks.map((todo, filerType)=>(
                filterType  &&(
                <Todos 
                  status={todo.status}
                  title={todo.title}
                  course={todo.course}
                  date={todo.date}
                  comments={todo.comments}
                  key={filerType}
                />
                )
            ))}

        

      </View>
      </ScrollView>
    </SafeAreaView>
   
  )
}

export default tasks