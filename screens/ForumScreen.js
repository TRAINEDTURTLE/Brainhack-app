// // import * as React from 'react';
// // import { Stylesheet, Text, View, Button } from 'react-native';
// // import { createStackNavigator } from "@react-navigation/stack";
// // import { useNavigation, NavigationContainer } from "@react-navigation/native";
// // import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import React,{ Component as ForumTabs } from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Searchbar from '../components/SearchBar'

const styles = StyleSheet.create({
  scene: {
      flex: 1
  },
  container: {
    flex: 1,
    // backgroundColor: 'red', height: '100%', width: '100%' 
    },
});

export default class App extends ForumTabs {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: 'Popular'},
                {key: 'second', title: 'Saved'},
                {key: 'third', title: 'Following'},
            ]
        }
    }
    renderScene = ({route})=> {
        switch(route.key){
            case 'Popular':
                return <View style = {[styles.scene, {backgroundColor: 'white' }]} />;
            case 'Savedr':
                return <View style = {[styles.scene, {backgroundColor: 'white' }]} />;
            case 'Following':
                return <View style = {[styles.scene, {backgroundColor: 'white' }]} />;
        }
    }

    render() {
        return(
            <TabView
                navigationState={{index: this.state.index , routes: this.state.route}}
                renderScene={this.renderScene}
                onIndexChange={index=>this.setState({index})}
                initialLayout={{width:Dimensions.get('window').width}}
            />
        );
    }
    constructor() {
        const [value, setValue] = useState();
        function updateSearch(value) {
            //do your search logic or anything
            console.log(value);
        }
        return (

            <View style={styles.container}>
                <View style={{ height: '20%', backgroundColor: "#3F569C", borderRadius: 10, }}>
                    <Image
                        style={{ marginTop: '15%', marginLeft: '5%' }}
                        source={require('../assets/ic_back.png')} />
                    <Searchbar
                        value={value}
                        updateSearch={updateSearch}
                        style={{ marginTop: '8%' }} />
                </View>

            </View>
        );
    }
    render;
}