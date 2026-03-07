import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import TabBarButton from './TabBarButton';

export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();



  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
        //   <PlatformPressable
        //     key={route.key}
        //     href={buildHref(route.name, route.params)}
        //     accessibilityState={isFocused ? { selected: true } : {}}
        //     accessibilityLabel={options.tabBarAccessibilityLabel}
        //     testID={options.tabBarButtonTestID}
        //     onPress={onPress}
        //     onLongPress={onLongPress}
        //     style={styles.tabBarItem}
        //   >
        //       {icon[route.name]({
        //         backgroundColor: isFocused? "white": "black",
        //         color: "white"
        //       })}
        //     {/* <Text style={{ color: isFocused ? colors.primary : colors.text }}>
        //        {label} 
        //     </Text> */}
        //   </PlatformPressable>
        <TabBarButton
            key={route.name}
            onPress= {onPress}
            onLongPress= {onLongPress}
            isFocused = {isFocused}
            routeName = {route.name}
            color = { isFocused? "white": "black"}
            // label={label}
        />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 50,
        flexDirection: "row",
        gap:5,
        width: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        marginHorizontal: 80,
        paddingVertical: 15,
          paddingHorizontal:20,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabBarItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 5,
        

    }
})