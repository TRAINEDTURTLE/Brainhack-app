// // import * as React from 'react';
// // import { Stylesheet, Text, View, Button } from 'react-native';
// // import { createStackNavigator } from "@react-navigation/stack";
// // import { useNavigation, NavigationContainer } from "@react-navigation/native";
// // import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import React,{ Component as ForumTabs } from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

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
            case 'Saved':
                return <View style = {[styles.scene, {backgroundColor: 'white' }]} />;
            case 'Following':
                return <View style = {[styles.scene, {backgroundColor: 'white' }]} />;
        }
    }

    render() {
        return(
            <TabView
                navigationState={{index: this.state.index , routes: this.state.routes}}
                renderScene={this.renderScene}
                onIndexChange={index=>this.setState({index})}
                initialLayout={{width:Dimensions.get('window').width}}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
  });