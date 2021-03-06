import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Stack = createStackNavigator()

function EventsScreen ({navigation}){
  const Navigation = useNavigation()
  return (<View style={{justifyContent:'center',aligntItems:'center'}}>
    <Text>Events First Page!</Text>

    <View style={{justifyContent:'center',aligntItems:'center',flexDirection:'row', marginBottom:'5%'}}>
      <View style={{width:'30%', marginLeft:'1.5%', marginRight:'1.5%'}}><Button color='#DF7861' onPress={()=>navigation.navigate("EventsSecond")} title="Available"/></View>
      <View style={{width:'30%', marginLeft:'1.5%', marginRight:'1.5%'}}><Button color='#DF7861' onPress={()=>navigation.navigate("EventsSecond")} title="Expired"/></View>
      <View style={{width:'30%', marginLeft:'1.5%', marginRight:'1.5%'}}><Button color='#DF7861' onPress={()=>navigation.navigate("EventsSecond")} title="Favourites"/></View>
    </View>
    <Text>Food Treats and Deals</Text>
    <ScrollView>
      <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Ya Kun Kaya Toast</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>Buy 1 Set, get 1 Set free</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Bakuteh</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>$15 off every 100 customers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <Text>June Holiday Family Promotions</Text>
      <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Hay Dairies Farm</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off 2nd Child Ticket</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Siloso Beach Hotel</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>3D 2N stay for 5 at 30% off</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    <View style={{paddingVertical: '2.5%', backgroundColor:'#94B49F', justifyContent:'center', marginHorizontal: '1.5%'}}>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 30}}>Four Leaves</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 20}}>50% off $10 Vouchers</Text>
        <Text style={{textAlign:'center', margin: '1.5%', fontSize: 10}}>Click for more</Text>
    </View>
    </ScrollView>
  </View>
  )
}

function EventsSecondScreen(){
  return (
    <View style={{flex:1,justifyContent:'center',aligntItems:'center',backgroundcolor:'lightgreen'}}>
      <Text>None!</Text>
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
