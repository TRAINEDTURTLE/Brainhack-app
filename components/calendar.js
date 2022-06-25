import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator()

function Task(taskname){
    return (
        <View style={styles.task}>
            <Text>{taskname}</Text>
            <TouchableOpacity>
                    <FontAwesome name="trash" size={24} color="red" />
                </TouchableOpacity>
        </View>
    )
}


function TaskView({navigation, route}){ //shows tasks
    let date = new Date(route.params.datestring)
    let datestring = date.toDateString()
    useEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity>
                    <Entypo 
                    name="add-to-list" 
                    size={24} 
                    color="black" />
                </TouchableOpacity>
            )
        })
    }

    )
    return (
        <View style={styles.container}>
            <Text>{["January","February","March","April","May","June","July","August","September","October","November","December"][date.getMonth()]} {date.getDate()}</Text>
            {Task("sample task 1")}
            {Task("sample task 2")}
        </View>        
    )
}

function CalendarHome({navigation}){
    //setting add new Task button
    useEffect(()=> {
        navigation.setOptions({
            headerRight: ()=> (
                <TouchableOpacity>
                    <Entypo 
                    name="add-to-list" 
                    size={24} 
                    color="black" />
                </TouchableOpacity>
            )
        })
    }
    )

    let d = new Date();
    const [month,setMonth] = useState(d.getMonth()); //only changing month, js automatically changes the year if month <0 or >11.
    //making the buttons and dates
    const Dates = ()=>{
        let d = new Date((new Date).getFullYear(),month,1)
        let today = new Date()
        let firstDay = d.getDay() - 6 //show one week before
        //defining header
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        let renderedDates = [
            [<View key="header" style={styles.row}>
                {days.map((day)=>
                <View key={day} style={styles.box}>
                    <Text key={day}>{day}</Text>
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
                temp.push(<TouchableOpacity key={datestring} //need unique key
                style={styles.box} onPress={()=>navigation.navigate("TaskView",{datestring})} title={date.getDate()}>
                    <Text key={datestring} 
                    style={[{justifyContent:"center"},
                    date.getDate()===today.getDate() && date.getMonth()===today.getMonth() ? {color:"red"} //same day
                    : date.getMonth()===today.getMonth() ? {color:"black"} //same month
                    : {color:"gray"}//diff month
                    ]}>
                        {date.getDate()}
                    </Text>
                </TouchableOpacity>)
            }
            renderedDates.push(<View key={renderedDates.length} style={styles.row}>{temp}</View>)
        }
        return renderedDates
    }
    let tempMonthobj = new Date(d.getFullYear(),month) //to wrap the year around if there is a month that is not within 0-11.
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>setMonth(month-1)}><AntDesign name="left" size={24} color="black"/></TouchableOpacity>
                <Text>{["January","February","March","April","May","June","July","August","September","October","November","December"][tempMonthobj.getMonth()]} {tempMonthobj.getFullYear()}</Text>
                <TouchableOpacity onPress={()=>setMonth(month+1)}><AntDesign name="right" size={24} color="black"/></TouchableOpacity>
            </View>

            <Dates/>

            <View style={styles.agenda}>
            <Text style={{fontSize:30,fontWeight:"bold"}}>Today's Agenda:</Text>
                <Text>Wake up.</Text>
                <Text>Brush Teeth.</Text>
                <Text>Go to bed.</Text>
            </View>
        </View>
    )
}
export default function CalendarStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="CalendarHome" component={CalendarHome}/>
            <Stack.Screen name="TaskView" component={TaskView}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        minWidth:"40%",
        alignContent:"center",
        
    },
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:0,
    },
    box: {
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        borderColor:'lightgrey',
        borderWidth:2,
        aspectRatio:1,
        
    },
    agenda: {
        marginTop:10,
        borderColor:"black",
        borderWidth:2,
        backgroundColor:"cyan",
        borderRadius:10,
        padding:10,
    },
    task: {
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"beige",
        borderRadius:10,
        borderColor:"black",
        borderWidth:1,
        padding:5,
        marginTop:4,
        minWidth:"60%",
    }
});