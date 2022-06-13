import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigation } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function ForumScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'top', alignItems: 'left' }}>
        <Text>Input discussion here!</Text>
        <Button 
          title = "Saved"
          onPress = {() => {
            navigation.navigate('ForumSecondScreen')
          }}
        />
      </View>
    );
  }

  function ForumSecondScreen() {
    return (
      <View style = {{ flex: 1, justifyContent: 'top', alignItems: 'center' }} > 
        <Text>Saved items</Text>
        <Button 
          title = "Popular"
          onPress = {() => {
            navigation.navigate('ForumThirdScreen')
          }}
        /> 
      </View>
    )
  }

  function ForumThirdScreen() {
    return (
      <View 
        style = {{ flex: 1, justifyContent: 'top', alignItems: 'center' }} > 
        <Text>Following items</Text>   
      </View>
    )
  }

  const Stack  =createStackNavigation();

  export default function ForumStack() {
    return (
      <Stack.Navigator> 
        <Stack.Screen name = "Popular" component = {ForumScreen} />
        <Stack.Screen name = "Saved" component = {ForumSecondScreen} />
        <Stack.Screen name = "Following" component = {ForumThirdScreen} />
      </Stack.Navigator>
    )
  }