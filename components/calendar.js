import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { render } from 'react-dom';

//import * as SQLite from "expo-sqlite";
/*
function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase("db.db");
  return db;
}
const db = openDatabase();
*/
const Stack = createStackNavigator()

function EditScreen({navigation, route}){
    let date = route.params.date
    return (
        <View>
            <Text>Edit Screen.</Text>
            <Button title="Confirm"/>
        </View>
    )
}

function DateScreen({navigation, route}){ //shows tasks
    let date = new Date(route.params.date)
    return (
        <View style={styles.container}>
            <Text>{`${["January","February","March","April","May","June","July","August","September","October","November","December"][date.getMonth()]} ${date.getDate()}.`}</Text>
            <Button onPress={()=>navigation.navigate("EditScreen",{date.toDateString()})} title="Edit Tasks"/>
        </View>        
    )
}

function CalendarHome({navigation}){
    const Navigation = useNavigation()
    let d = new Date();
    const [month,setMonth] = useState(d.getMonth()); //only changing month, js automatically changes the year if month <0 or >11.
    //making the buttons and dates
    const dates = (month)=>{
        let d = new Date((new Date).getFullYear(),month,1)
        let today = new Date()
        let firstDay = d.getDay() - 6 //show one week before
        //defining header
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        let renderedDates = [
            [<View style={styles.row}>
                {days.map((day)=>
                <View style={styles.button}>
                    <Text>{day}</Text>
                </View>)}
            </View>]
        ];
        let temp;
        for (let row=0; row<6; row++){ //adding date
            temp = []
            for (let column=0; column<7; column++){
                let day = firstDay+column+7*row
                let date = new Date(d.getFullYear(),d.getMonth(),day)
                let datestring = date.toDateString() //pass to editDate function as a String, not a class so as to not bring up any errors (must pass a serializable thing)
                temp.push(<TouchableOpacity 
                style={styles.button} onPress={()=>navigation.navigate("DateScreen",{datestring})}>
                    <Text style={date.getDate()===today.getDate() && date.getMonth()===today.getMonth() ? {color:"red"} //same day
                    : date.getMonth()===today.getMonth() ? {color:"black"} //same month
                    : {color:"gray"}//diff month
                    }>
                        {date.getDate()}
                    </Text>
                </TouchableOpacity>)
            }
            renderedDates.push(<View style={styles.row}>{temp}</View>)
        }
        return renderedDates
    }
    let tempMonthobj = new Date(d.getFullYear(),month) //to wrap the year around if there is a month that is not within 0-11.
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>setMonth(month-1)}><AntDesign name="left" size={24} color="black"/></TouchableOpacity>
                <Text>{["January","February","March","April","May","June","July","August","September","October","November","December"][tempMonthobj.getMonth()]} {tempMonthobj.getFullYear()}</Text>
                <TouchableOpacity onPress={()=>setMonth(month+1)}><AntDesign name="right" size={24} color="black"/></TouchableOpacity>
            </View>
            {dates(month)}
        </View>
    )
}
export default function CalendarStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="CalendarHome" component={CalendarHome} options={{headerShown:false}}/>
            <Stack.Screen name="DateScreen" component={DateScreen}/>
            <Stack.Screen name="EditScreen" component={EditScreen}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    header :{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    container: {
        alignSelf:"center",
        flex:1,
        maxHeight:"40%",
        padding:10,
        
    },
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button: {
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        padding:15,
        borderColor:'light-grey',
        borderWidth:1,
        aspectRatio:1,
    },
});