import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import ProgressSlider from './ProgressSlider';

type StateVariant =   "toDO" | "inProgress" | "done";

type TodoProps = {
    status: StateVariant;
    title: string;
    course: string;
    date: string;
    comments: number;
    

}

const Todo = ({status, title, course, date, comments}: TodoProps) => {

     const variantStyles: Record<StateVariant, ViewStyle>={
        toDO: {
            backgroundColor: '#a28ef9' ,
            borderRadius: 25,
            width: 75,
            padding:5,
            alignItems:"center"
           
        },
        inProgress: {
            backgroundColor: '#ffd89d' ,
            borderRadius: 25,
            width: 100,
            padding:5,
            alignItems:"center"     
        },
        done: {
            backgroundColor: '#eceef0' ,
            borderRadius: 25,
            width: 75,
            padding:5,
            alignItems:"center"
        }
    }
  return (
    <View style={styles.container}>
      <Pressable style = {variantStyles[status]}><Text style={{color: "white", fontWeight: '500'}}>{status}</Text></Pressable>
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
         <ProgressSlider/>
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
        paddingTop: 25,
        paddingBottom: 25
    },
    title: {
        fontSize: 20,
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