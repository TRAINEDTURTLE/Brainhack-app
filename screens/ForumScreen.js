// import * as React from 'react';
// import { Stylesheet, Text, View, Button } from 'react-native';
// import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation, NavigationContainer } from "@react-navigation/native";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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

// import PopularTab from './screens/PopularTab';
// import SavedTab from './screens/SavedTab';
// import FollowingTab from './screens/FollowingTab';

// const Tab = createMaterialTopTabNavigator();

// function Following() {
//   return (
//     <View style={{alignItems:'center', justifyContent:'center', flex:1,}}>
//       <Text>Following items</Text>
//     </View>
//     )
// }

// function Saved() {
//   return (
//     <View style={{alignItems:'center', justifyContent:'center', flex:1,}}>
//       <Text>Saved items</Text>
//     </View>
//     )
// }

// function Popular() {
//   return (
//     <View style={{alignItems:'center', justifyContent:'center', flex:1,}}>
//       <Text>Popular items</Text>
//     </View>
//     )
// }

// export default function ForumTabs(){
//   return (
//     <NavigationContainer>
//       <Tab.Navigator style={{paddingTop:20}}>
//         <Tab.Screen name="Popular" component={ Popular } />
//         <Tab.Screen name="Saved" component={Saved} />
//          <Tab.Screen name="Following" component={Following} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// top tabs
import React,{ Component as ForumTabs } from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


// search bar
import { useState, useEffect } from "react";
import {  Text,  SafeAreaView,  ActivityIndicator, } from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";

const ForumTab = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();

 // get data from the fake api endpoint
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
             );
        const data = await apiResponse.json();
        setFakeData(data);
        };
        getData();
    }, []);

    return (
        <SafeAreaView style={styles.root}>
          {!clicked && <Text style={styles.title}>Programming Languages</Text>}
    
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          {!fakeData ? (
            <ActivityIndicator size="large" />
          ) : (
            
              <List
                searchPhrase={searchPhrase}
                data={fakeData}
                setClicked={setClicked}
              />
            
          )}
        </SafeAreaView>
      );
 };
    

export default class App extends ForumTabs {
  constructor(props) {
      super(props);
      this.state = {
          index: 0,
          routes: [
              { key: 'first' , title: 'Popular' },
              { key: 'second' , title: 'Saved'},
              { key: 'third' , title: 'Following'},
          ]
      }
  }

  renderScene = ({ route }) => {
      switch (route.key) {
          case 'Popular':
              return <View style={[styles.scene, { backgroundColor: 'white' }]} />; 
          case 'Saved':
              return <View style={[styles.scene, { backgroundColor: 'white' }]} />;
          case 'Following':
              return <View style={[styles.scene, { backgroundColor: 'white' }]} />;
      }
  }
          
  render() {
      return(
          <TabView
              navigationState={{ index: this.state.index, routes: this.state.routes }}
              renderScene={this.renderScene}
              onIndexChange={index=>this.setState({index})}
              initialLayout={{width: Dimensions.get('window').width}}
          />
      );
  }
}

const styles = StyleSheet.create({
  scene: {
      flex: 1
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});