import { createScheduleStyles } from '@/assets/styles/schedules.styles'
import DateComponent from '@/components/DateComponent'
import ScheduleComponent from '@/components/Schedule'
import { FontAwesome5 } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Schedule = () => {

  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

const handleDatePress = (date: number) => {
  setSelectedDate(date);
};

  console.log(isActive)

  const schedules = [
    {
      day: "Monday",
      date: 18
    },
    {
      day: "Tuesday",
      date: 19
    },
    {
      day: "Wednesday",
      date: 20
    },
    {
      day: "Thurday",
      date: 21
    },
    {
      day: "Friday",
      date: 22
    }
  ]

  const timeTable = [
    {
      startTime: '8:30 AM',
      endTime: '10:00 AM',
      title: 'Social Studies',
      location: '83, Room 124',
     lecturer: 'Mrs. Goodman' ,
    },
        {
      startTime: '10:30 AM',
      endTime: '12:00 AM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs. Melton',
    },
        {
      startTime: '1:00 PM',
      endTime: '2:30 PM',
      title: 'Arts and Culture' ,
      location: '82, Room 160',
     lecturer: 'Mrs. Fabiola',
    },
        {
       startTime: '3:00 PM',
      endTime: '4:30 PM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs Melton',
    },
       {
       startTime: '3:00 PM',
      endTime: '4:30 PM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs Melton',
    },
       {
       startTime: '3:00 PM',
      endTime: '4:30 PM',
      title: 'English Literature' ,
      location: '82, Room 158',
     lecturer: 'Mrs Melton',
    }
  ]


  const scheduleStyles = createScheduleStyles()
  function handlePress(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <SafeAreaView style= {scheduleStyles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
      <View style = {scheduleStyles.topNav}>
          <View style = {scheduleStyles.InnerTopNav}>
          <Text style ={scheduleStyles.title}>My Schedule </Text>
           <FontAwesome5 name='calendar' size={30} style={{backgroundColor:"white", borderRadius: 20, padding:8}}/>  
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
            onPress={handlePress}
            key={index}
          />
        ))
      }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Schedule