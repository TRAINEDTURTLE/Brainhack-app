import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// function ForumScreen() {
//   const navigation = useNavigation();

//     return (
//       <View style={{ flex: 1, justifyContent: 'top', alignItems: 'left' }}>
//         <Text>Input discussion here!</Text>
//         <Button 
//           title = "Saved"
//           onPress = {() => {
//             navigation.navigate('ForumSecondScreen')
//           }}
//         />
//       </View>
//     );
//   }

//   function ForumSecondScreen() {
//     const navigation = useNavigation();
//     return (
//       <View style = {{ flex: 1, justifyContent: 'top', alignItems: 'center' }} > 
//         <Text>Saved items</Text>
//         <Button 
//           title = "Popular"
//           onPress = {() => {
//             navigation.navigate('ForumThirdScreen')
//           }}
//         /> 
//       </View>
//     )
//   }

//   function ForumThirdScreen() {
//     return (
//       <View 
//         style = {{ flex: 1, justifyContent: 'top', alignItems: 'center' }} > 
//         <Text>Following items</Text>   
//       </View>
//     )
//   }

//   const Stack  = createStackNavigator();

//   export default function ForumStack() {
//     return (
//       <Stack.Navigator> 
//         <Stack.Screen name = "Popular" component = {ForumScreen} />
//         <Stack.Screen name = "Saved" component = {ForumSecondScreen} />
//         <Stack.Screen name = "Following" component = {ForumThirdScreen} />
//       </Stack.Navigator>
//     )

    
//   }

// function ForumScreen() {
//   const Tab = createMaterialTopTabNavigator();
  
//   export default function App() {
//     return (
//       <SafeAreaView style={{flex:1}}>
//         <StatusBar/>
//         <NavigationContainer>
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
//                 //Set the icon based on which route it is (name of the tab)
//                 if (route.name === 'Popular') {
//                   iconName = 'calendar';
//                 } else if (route.name === 'Saved') {
//                   iconName = 'bookmark';
//                 } else if (route.name === 'Following'){
//                   iconName = 'star-half-full';
//                 }
//                 // You can return any component that you like here!
//                 return <FontAwesome name={iconName} size={size} color={color} />;
//               },
//             tabBarActiveTintColor: "tomato",
//             tabBarInactiveTintColor: "gray",
//             })}
//           >
//             <Tab.Screen name="Popular" component={PopularScreen} />
//             <Tab.Screen name="Saved"  component={SavedScreen} />
//             <Tab.Screen name="Following" component={FollowingScreen} />
//           </Tab.Navigator>
//         </NavigationContainer>
//       </SafeAreaView>
//     );
//   }
// }

const Tab = createMaterialTopTabNavigator();
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator style={{paddingTop:20}}>
          <Tab.Screen name="Popular" component={ChatScreen} />
          <Tab.Screen name="Saved" component={ContactsScreen} />
          <Tab.Screen name="Following" component={GalleryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }