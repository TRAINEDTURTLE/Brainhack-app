import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

//tabs
import HomeScreen from './screens/HomeScreen';
import EventsStack from './screens/EventsScreen';
//import ForumTabs from './screens/ForumScreen';
import CalendarStack from './components/calendar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              //Set the icon based on which route it is (name of the tab)
              if (route.name === 'Home') {
                iconName = 'calendar';
              } else if (route.name === 'Events') {
                iconName = 'list';
              } else if (route.name === 'Forum'){
                iconName = 'comments';
              }
              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Tab.Screen name="Events" component={EventsStack} options={{headerShown:false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
//forum tabs currently disabled
//<Tab.Screen name="Forum" component={ForumTabs}/>