import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


type ActivitiesProp={
    title: string;
    date: string;
    description: string
    icon: IconType
}
export type IconType = "maths" | "arts"

export default function Activities({title,date,description,icon}: ActivitiesProp) {
  
  const iconMap = {
    maths: {
        name:"ruler",
        bg: "#a28ef9"
    },
    arts: {
        name:"television",
        bg: "#ffd89d"
    },
  } as const;

    const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateString));
  };
  const currentIcon = iconMap[icon] 
    return (
    <View style={styles.container}>

       <View style={{display:'flex', flexDirection: "row", gap: 15}}>
      
       <MaterialCommunityIcons
        name={currentIcon.name}
        size={24}
        style={{
          backgroundColor: currentIcon.bg,
          borderRadius: 20,
          padding: 10,
        }}
            />

        <View>
           <Text style={styles.title}>{title} <Text style={styles.date}>{formatDate(date)}</Text> </Text>
             <Text>{description}</Text>
      </View>

    </View>

      <MaterialCommunityIcons  name="dots-vertical" size={30} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        gap: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: '#9aa6b2',
        inset: 1,
        borderWidth: 1
    },
    title: {
        fontWeight: "700",
    },
    date:{
        color: '#9aa6b2',
       
        fontWeight: "400"
    },
    comments:{
         color: '#9aa6b2'
    }

})
 // color="#666" 
    // onPress={() => console.log('Open menu')} 