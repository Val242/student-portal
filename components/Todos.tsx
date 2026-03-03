import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TodoProps = {
    status: string;
    title: string;
    course: string;
    date: string;
    comments: number;

}

const Todo = ({status, title, course, date, comments}: TodoProps) => {
  return (
    <View style={styles.container}>
      <Text>{status}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text>{course}</Text>
        <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <View style={{display:'flex', flexDirection: 'row', gap: 6}} >
                <Ionicons name='calendar' color={'#9aa6b2'} size={20} />
                <Text style= {styles.date}>{date}</Text>
            </View>
            <View style={{display:'flex', flexDirection: 'row', gap: 6}}>
                <Ionicons name='chatbubble-outline' color={'#9aa6b2'} size={20} />
                <Text style= {styles.comments}>{comments} comments</Text> 
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 6,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 15,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
    },
    date:{
        color: '#9aa6b2'
    },
    comments:{
         color: '#9aa6b2'
    }

})

export default Todo