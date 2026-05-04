import { createTasksStyles } from '@/assets/styles/tasks.styles';
import Button from '@/components/Button';
import TasksTop from '@/components/task/TasksTop';
import Todos from '@/components/task/Todos';
import { getUserProfile } from '@/config/api';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextStyle, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Variant = "allTask" | "toDO" | "inProgress" | "done";
type StateVariant = "toDO" | "inProgress" | "done";

interface ButtonState {
  status: Variant;
  title: string;
  textStyle: TextStyle;
}

interface StatusState {
  statusState: StateVariant;
  title: string;
  course: string;
  date: string;
  comments: number;
}

const tasksStyles = createTasksStyles();

const Tasks = () => {
  const [selectedStatus, setSelectedStatus] = useState<Variant | null>(null);

  //  separate states
  const [allTasks, setAllTasks] = useState<StatusState[]>([]);
  const [tasks, setTasks] = useState<StatusState[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //  Load tasks from backend
  const loadTasks = async () => {
    setLoading(true);

    try {
      const data = await getUserProfile.getUserTask();

      // IMPORTANT: map backend → frontend
      const mapped: StatusState[] = data.map((item: any) => ({
        statusState: item.status, // "toDO" | "inProgress" | "done"
        title: item.task.title,
        course: item.task.subject.name,
        date: item.task.date,
        comments: 0, // adjust later if you have comments
      }));

      setAllTasks(mapped);
      setTasks(mapped);
    } catch (err) {
      console.error(err);
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  //  Filter logic (cleaned)
  const handleStatusPress = (status: Variant) => {
    if (selectedStatus === status) {
      setSelectedStatus(null);
      setTasks(allTasks);
      return;
    }

    setSelectedStatus(status);

    if (status === "allTask") {
      setTasks(allTasks);
      return;
    }

    const filtered = allTasks.filter(
      (task) => task.statusState === status
    );

    setTasks(filtered);
  };

  const stateButtons: ButtonState[] = [
    { title: "All Tasks", textStyle: tasksStyles.individualButton, status: "allTask" },
    { title: "To do", textStyle: tasksStyles.individualButton, status: "toDO" },
    { title: "In Progress", textStyle: tasksStyles.individualButton, status: "inProgress" },
    { title: "Done", textStyle: tasksStyles.individualButton, status: "done" },
  ];

  return (
    <SafeAreaView style={tasksStyles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tasksStyles.page}>
          
          <TasksTop />

          
          <View style={tasksStyles.buttonRow}>
            {stateButtons.map((btn, index) => (
              <Button
                key={index}
                title={btn.title}
                textStyle={btn.textStyle}
                status={btn.status}
                isActive={selectedStatus === btn.status}
                onPress={() => handleStatusPress(btn.status)}
              />
            ))}
          </View>

          
          <View style={tasksStyles.filters}>
            <View style={tasksStyles.filter}>
              <Ionicons name="funnel" size={20} />
              <Text>Filters</Text>
            </View>
            <View style={tasksStyles.filter}>
              <Ionicons name="filter" size={20} />
              <Text>Sort by</Text>
            </View>
          </View>

        
          {loading && <Text style={{ textAlign: "center" }}>Loading...</Text>}

         
          {error && (
            <Text style={{ textAlign: "center", color: "red" }}>
              {error}
            </Text>
          )}

        
          {!loading && tasks.length === 0 && (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No tasks found
            </Text>
          )}

          {tasks.map((todo, index) => (
            <Todos
              key={index}
              status={todo.statusState}
              title={todo.title}
              course={todo.course}
              date={todo.date}
              comments={todo.comments}
            />
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;