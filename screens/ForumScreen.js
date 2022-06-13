import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

function ForumScreen() {
  const navigation = useNavigation();

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
    const navigation = useNavigation();
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

  const Stack  = createStackNavigator();

  export default function ForumStack() {
    return (
      <Stack.Navigator> 
        <Stack.Screen name = "Popular" component = {ForumScreen} />
        <Stack.Screen name = "Saved" component = {ForumSecondScreen} />
        <Stack.Screen name = "Following" component = {ForumThirdScreen} />
      </Stack.Navigator>
    )
  }

  const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
  );
  
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
  );
  
  const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'white' }]} />
  );
  
  
  const initialLayout = { width: Dimensions.get('window').width };
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  
  export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Popular' },
      { key: 'second', title: 'Saved' },
      { key: 'third', title: 'Following'}
    ]);
  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
    },
    scene: {
      flex: 1,
    },
  });
