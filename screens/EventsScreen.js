import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator()

function EventsScreen ({navigation}){
  const Navigation = useNavigation()
  return (<View style={{flex:1,justifyContent:'center',aligntItems:'center',backgroundcolor:'lightgreen'}}>
    <Text>Events First Page!</Text>
    <Button onPress={()=>navigation.navigate("EventsSecond")} title="Second Screen"/>
  </View>
  )
}

function EventsSecondScreen(){
  return (
    <View style={{flex:1,justifyContent:'center',aligntItems:'center',backgroundcolor:'lightgreen'}}>
      <Text>Events Second Page!</Text>
    </View>
  )
}

export default function EventsStack(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="EventsHome" component={EventsScreen}/>
        <Stack.Screen name="EventsSecond" component={EventsSecondScreen}/>
      </Stack.Navigator>
    );
  }