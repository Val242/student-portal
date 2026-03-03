import { StyleSheet } from "react-native";

export const createTasksStyles = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      fontSize: 32,
      fontWeight: "700",
      letterSpacing: -1
    },
    scrollView: {
      flex: 1,
    },

    topNav:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    InnerTopNav:{
        display: 'flex',
        flexDirection: 'row' ,
        gap: 10
    },
    InnerTopNavIcon:{

    },
    page: {
        marginHorizontal: 10,
        backgroundColor: '#eceef0'
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
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 10
    },
    filter:{
        display: 'flex',
        flexDirection: 'row' ,
        gap: 10
    }

  });

  return styles;
};