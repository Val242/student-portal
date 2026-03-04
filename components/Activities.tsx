import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


type ActivitiesProp={
    title: string;
    date: string;
    description: string
}

export default function Activities({title,date,description}: ActivitiesProp) {
  return (
    <View style={styles.container}>
        <View>
           <Text style={styles.title}>{title} <Text style={styles.date}>{date}</Text> </Text>
             <Text>{description}</Text>
      </View>
      <MaterialCommunityIcons  name="dots-vertical" size={24} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        gap: 6,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: '#9aa6b2',
        position: 'relative',
        inset: 1,
        borderWidth: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    date:{
        color: '#9aa6b2',
        fontSize: 15,
        fontWeight: "400"
    },
    comments:{
         color: '#9aa6b2'
    }

})
 // color="#666" 
    // onPress={() => console.log('Open menu')} 