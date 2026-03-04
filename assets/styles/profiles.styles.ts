import { StyleSheet } from "react-native";

export const createProfilesStyles = () => {

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
      fontSize: 30,
      fontWeight: "400",
      letterSpacing: -1,
      color: "white"
    },
    scrollView: {
      flex: 1,
    },

    topNav:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        backgroundColor: '#a28ef9'
    },
    InnerTopNav:{
        display: 'flex',
        flexDirection: 'row' ,
        gap: 10
    },
    InnerTopNavIcon:{

    },
    page: {
        paddingHorizontal: 10,
        backgroundColor: '#a28ef9',
        
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
        position: 'relative',
        borderRadius: 20,
        inset: 0,
        
    }

  });

  return styles;
};