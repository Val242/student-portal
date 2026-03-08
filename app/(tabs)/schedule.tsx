import { createScheduleStyles } from '@/assets/styles/schedules.styles'
import DateComponent from '@/components/schedule/DateComponent'
import ScheduleComponent from '@/components/schedule/Schedule'
import { FontAwesome5 } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Schedule = () => {

  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);


const handleDatePress = (date: number) => {
  console.log(`clicked date is ${date}`)
  if (selectedDate === date) {
    setSelectedDate(null); // deactivate
  } else {
    setSelectedDate(date); // activate new date
  }
  console.log(selectedDate===date)
  console.log(`Current selected date: ${selectedDate}`)

  let id = null;

  
};

  // console.log(isActive)

  const schedules = [
    {
      id: 1,
      day: "Mon",
      date: 18
    },
    {
      id: 2,
      day: "Tue",
      date: 19
    },
    {
      id: 3,
      day: "Wed",
      date: 20
    },
    {
      id: 4,
      day: "Thu",
      date: 21
    },
    {
      id: 5,
      day: "Fri",
      date: 22
    }
  ]

  const timeTable = [
    {
      id: 1,
      startTime: '8:30 AM',
      endTime: '10:00 AM',
      title: 'Social Studies',
      location: '83, Room 124',
     lecturer: 'Mrs. Goodman' ,
    },
        {
      id: 2,    
      startTime: '10:30 AM',
      endTime: '12:00 AM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs. Melton',
    },
        {
      id: 3,
      startTime: '1:00 PM',
      endTime: '2:30 PM',
      title: 'Arts and Culture' ,
      location: '82, Room 160',
     lecturer: 'Mrs. Fabiola',
    },
        {
      id: 4,
      startTime: '3:00 PM',
      endTime: '4:30 PM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs Melton',
    },
       {
      id: 5,
      startTime: '5:00 PM',
      endTime: '4:30 PM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs Melton',
    },
       {
      id: 6,  
      startTime: '4:00 PM',
      endTime: '4:30 PM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs Melton',
    }
  ]


  const scheduleStyles = createScheduleStyles()
// const handleDatePress = (date: number) => {
//   setSelectedDate(date);
// };
const handleSchedulePress = (id: number) => {
 if (selectedScheduleId === id) {
    setSelectedScheduleId(null); // deactivate
  } else {
    setSelectedScheduleId(id); // activate new date
  }
  
};

  return (
    <SafeAreaView style= {scheduleStyles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
      <View style = {scheduleStyles.topNav}>
          <View style = {scheduleStyles.InnerTopNav}>
          <Text style ={scheduleStyles.title}>My Schedule </Text>
           <FontAwesome5 name='calendar' size={25} style={{backgroundColor:"white", borderRadius: 20, padding:8}}/>  
          </View>
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 12,
          gap: 12,           // space between cards
        }}
      >
         {
            schedules.map((schedule, index)=>(
              
              <DateComponent 
              day={schedule.day} 
              date={schedule.date}
              isActive={selectedDate === schedule.date}
              onPress={() => handleDatePress(schedule.date)}
              key={index}
              />
            ))
          }
          </ScrollView>
      </View>
          
      {
        timeTable.map((item, index)=>(
          <ScheduleComponent
            startTime={item.startTime}
            endTime={item.endTime}
            title={item.title}
            location={item.location}
            lecturer={item.lecturer}
            isActive = {selectedScheduleId === item.id}
            onPress={()=>handleSchedulePress(item.id)}
            key={item.id} 
          />
        ))
      }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Schedule