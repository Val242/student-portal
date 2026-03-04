import { StyleSheet } from "react-native";

export const createScheduleStyles = () => {

  const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        backgroundColor: '#eceef0'
    },
    safeArea: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 24,
      paddingVertical: 32,
      paddingBottom: 24,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    title: {
      fontSize: 30,
      fontWeight: "700",
      letterSpacing: -1,
    },
    scrollView: {
      flex: 1,
    },

    topNav:{
        display: 'flex',
      
    },
    InnerTopNav:{
        display: 'flex',
        flexDirection: 'row' ,
        justifyContent: 'space-between',
        gap: 10
    },
    InnerTopNavIcon:{

    },
    page: {
        paddingHorizontal: 10,
        backgroundColor: '#a28ef9',
        // borderBottomRightRadius: 25,
        // borderBottomLeftRadius: 25,
        // overflow: 'hidden'
    },
    buttonRow: {
        display: 'flex',
        flexDirection: "row",
        gap: 10,
        marginVertical: 15
    },
    individualButton:{
        backgroundColor: 'white'
    },
    filters:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        marginBottom: 10,
        gap: 5
    },
    filter:{
        display: 'flex',
        flexDirection: 'row' ,
        gap: 10
    },
    profileLayout:{
        backgroundColor: "white",
        borderRadius: 25,
        paddingHorizontal: 10,
        
    }

  });

  return styles;
};